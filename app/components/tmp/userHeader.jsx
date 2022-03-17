import React, { Component } from 'react'
import {Navbar , Container ,Nav } from 'react-bootstrap'
import { FaUserAlt,FaPlus,FaAngleDown} from 'react-icons/fa'
import {FiLogOut,FiBookmark,FiArchive} from 'react-icons/fi'
import $ from 'jquery'
import Cookies from 'js-cookie'

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            open:false,
        }
    }
    userMenu = () => {
        if($(".userDropMenu").hasClass("userMenuOpen")){
            this.setState({open:true})
        }
        $(".userDropMenu").toggleClass("userMenuOpen");
    }
    logOut = () => {
        Cookies.remove("token");
        window.location.reload();
    }
    render() {
        return (
            <Navbar className="mt-0" collapseOnSelect expand="lg" >
                <Container>
                    <a className='navbar-brand' href="/">
                        <img src="/logo.png" alt="logo" />
                    </a>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto language">
                            <span className="lang-link" >عربي</span>
                            <span className="lang-link" >English</span>
                        </Nav>
                        <Nav className="mr-auto navLeft">
                            <span className="nav-link" >مساعدة و إتصال</span>

                            {/* <button className='profile'><FaUserAlt/>حسابي</button> */}
                            <div className="userMenu" onClick={() =>{this.userMenu()}}>
                                <button className='profile user'>{this.props.loaderData.full_name}<FaAngleDown/></button>
                                <div className="dropdown-menu userDropMenu dropdown-menu-right text-right" aria-labelledby="userDropdown">
                                    <button  onClick={()=> {location.href='/myAds'}}  type="button" className="dropdown-item" > <FiArchive/>إعلاناتي</button>
                                    <button onClick={()=> {location.href='/bookmarks'}} type="button" className="dropdown-item" > <FiBookmark/>المفضّلة</button>
                                    <button type="button" className="dropdown-item" onClick={() => this.logOut()} > <FiLogOut/>تسجيل الخروج</button>
                                </div>
                            </div>

                            <button className='addCart' onClick={()=> {location.href='/newAd'}}><FaPlus/>أضف إعلان</button>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}