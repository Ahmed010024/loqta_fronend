import React, { Component } from 'react';
import {FaStar} from 'react-icons/fa'
import {FiMoreHorizontal} from 'react-icons/fi'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/ar'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import {MdOutlineDelete , MdModeEdit} from 'react-icons/md'
import $ from 'jquery'
import Swal from 'sweetalert2'
import {toggle} from '../../controller/bookmarks/toggle'
import axios from 'axios';
import { API } from '~/config/variables';
import Cookies from 'js-cookie';
const formatter = buildFormatter(frenchStrings)

export default class AdBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            fav:this.props.bookmark,
            menu:false,
        }
        console.log(this.props.bookmark)
    }
    handleDelete = (ID) => {
        alert(ID)
        Swal.fire({
            title: 'هل أنت متأكد ؟',
            text: "لن تتمكن من إستعادتها!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#722b8b',
            cancelButtonColor: '#d33',
            confirmButtonText: 'نعم!',
            cancelButtonText: 'إلغاء'
            }).then((result) => {
            if (result.isConfirmed) {
                var deleteData = new FormData();
                deleteData.append("product",ID)
                axios.post(`${API}/product/delete`,deleteData,{
                    headers: {
                        'Authorization': `${Cookies.get("token")}`
                    }
                }).then((result) => {
                    if(result.data.product === true) {
                        Swal.fire(
                            'تم!',
                            'تم حذف الإعلان بنجاح',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'خطأ!',
                            'لم يتم حذف الإعلان ',
                            'error'
                        )
                    }
                }).catch((error) => {
                    console.log(error)
                    Swal.fire(
                        'خطأ!',
                        'لم يتم حذف الإعلان ',
                        'error'
                    )
                })
              
            }
        })
    }
    render() {
        return (
            <div className="adsBox" onMouseLeave={()=>this.setState({menu:false})}>
                {this.props.mine ? 
                    <div className="adMenu">
                        <button onClick={() => this.state.menu ? this.setState({menu:false}) : this.setState({menu:1})} className="adMenuBtn">
                            <FiMoreHorizontal/>
                        </button>
                        {
                            this.state.menu ===  1 ? 
                            <div className="cardSettingsMenu">
                                    <button ><MdModeEdit/>تعديل</button>
                                    <button onClick={() => this.handleDelete(this.props.ID)}><MdOutlineDelete/>حذف</button>
                            </div>:null
                        }
                    </div> 
                    : null
                }
                <button 
                        onClick={() => {
                        toggle(this.props.ID);
                            this.state.fav ? this.setState({fav:0,}) : this.setState({fav:1,})
                        }} 
                    className={`starBtn ${this.state.fav ? "fill" :""}`}>
                    <FaStar />
                </button>
                <div className="adsBoxImg" style={{backgroundImage:`url(${this.props.img})`}}></div>
                <div className="adsBoxContent">
                    <a href={"/product/" + this.props.ID}>{this.props.title}</a>
                    <span className='price'>{this.props.price} ج.م</span>
                    <div className="categ">
                        <span>{this.props.section}</span>
                        <span className='categSpan'>»</span>
                        <span>{this.props.categ}</span>
                    </div>
                    <div className="boxFooter">
                        <p><TimeAgo date={this.props?.date} live formatter={formatter} /></p>
                        <p>{this.props.address}</p>
                    </div>
                </div>
            </div>
        );
    }
}
