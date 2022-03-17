import axios from 'axios'
import Cookies from 'js-cookie'
import React, { Component } from 'react'
import {FaAngleLeft} from 'react-icons/fa'
import { useRoutes } from 'react-router'
import { API } from '~/config/variables'
import AdBox from '../tmp/adBox'
import PageHeader from '../tmp/pageHeader'

export default class AdsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            ads:[]
        }
        this.getProducts()
    }
    getProducts = () => {
        axios.get(`${API}/product?branch=${this.props.branch}`,{
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
                    {/* <PageHeader
                        branch={"sdf"}
                    /> */}
                    <h3>الإعلانات</h3>
                    <div className="row">
                        {this.state.ads.map((ads,index) =>
                            <div className="col-md-4" key={index}>
                                <AdBox 
                                    // mine={ads.mine}
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
                </div>
            </div>
        )
    }
}