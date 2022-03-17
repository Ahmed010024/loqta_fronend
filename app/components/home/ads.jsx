import React, { Component } from 'react'
import {FaAngleLeft} from 'react-icons/fa'
import AdBox from '../tmp/adBox'
import axios from 'axios'
import { API } from '~/config/variables'
import Cookies from 'js-cookie'

export default class Ads extends Component {
    constructor(props){
        super(props)
        this.state = {
            ads:[]
        }
        this.getProducts()
    }
    getProducts = () => {
        axios.get(`${API}/product`,{
            headers: {
                'Authorization': `${Cookies.get("token")}`
            }
        }).then((res) => {
            if(res.status === 200){
                console.table(res.data.product)
                this.setState({
                    ads:res.data.product
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className='ads'>
                <div className="container">
                    <h3>الإعلانات المضافة حديثاً</h3>
                    <div className="row">
                        {this.state.ads.map((ads,index) =>
                            <div className="col-md-4" key={index}>
                                <AdBox 
                                    ID={ads.ID}
                                    title={ads.title}
                                    price={ads.price}
                                    section={ads.branch}
                                    categ={ads.category}
                                    date={ads.date}
                                    address={ads.city}
                                    img={ads.img}
                                    bookmark={ads.bookmark}
                                />
                            </div>
                        )}
                    </div>
                    <div className="showMore text-left">
                        <a href="">اظهر المزيد <FaAngleLeft/></a>
                    </div>
                </div>
            </div>
        )
    }
}
