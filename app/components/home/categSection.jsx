import React, { Component } from 'react'
import {FaSearch,FaCarSide} from 'react-icons/fa'
import axios from 'axios'
import { API } from '~/config/variables'
export default class CategSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            categs:[],
            city:[],
            area:[]
        }
        this.getBranches()
        this.getCities()
    }
    getBranches = () => {
        axios.get(`${API}/branch`).then((res) => {
            if(res.status === 200){
                this.setState({
                    categs:res.data.branch
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    getCities = (branch) => {
        axios.get(`${API}/city`).then((res) => {
            if(res.status === 200){
                this.setState({
                    city:res.data.city
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    cityHandle = (event) => {
        var ID = event.target.value;
        this.getArea(ID);
    }

    getArea = (city) => {
        axios.get(`${API}/area/${city}`).then((res) => {
            if(res.status === 200){
                this.setState({
                    area:res.data.area
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className='categSection'>
                    <div className="container">
                        <div className="categContent">
                            <div className="searchBox">
                                <div className="inputBox">
                                    <input type="text" placeholder='عن ماذا تبحث...' />
                                    <FaSearch/>
                                </div>
                                <div className="inputBox">
                                    <select ref={this.city} onChange={event => this.cityHandle(event)} className="form-control" >
                                        {this.state.city.length > 0 ?
                                            <>
                                                <option  value="0">اختر المدينة</option>
                                                {this.state.city.map((item) => {
                                                    return (<option key={item.ID} value={item.ID}>{item.title}</option>)
                                                })}
                                            </>
                                        : null}
                                    </select>
                                </div>
                                <div className="inputBox">
                                    <select ref={this.area} className="form-control" >
                                        {this.state.area.length > 0 ?
                                            <>
                                                <option  value="0">اختر المنطقة </option>
                                                {this.state.area.map((item) => {
                                                    return (<option key={item.ID} value={item.ID}>{item.title}</option>)
                                                })}
                                            </>
                                        : <option value="0">اختر مدينة اولاً</option> }
                                    </select>
                                </div>
                                <button><FaSearch/> ابحث</button>
                            </div>
                            <div className="categBoxs">
                                <div className="row">
                                    {this.state.categs.map((categs,index) =>
                                        <div className='col-md-3 col-6' key={index}>
                                                <div className="categBox" >
                                                    <a href={`/branch/${categs.ID}`}>
                                                        <div className="catedIco">
                                                            <img className='icon' height='40' width={40} src={categs.img} alt/>
                                                        </div>
                                                        <span href="/">{categs.title}</span>
                                                    </a>
                                                </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
