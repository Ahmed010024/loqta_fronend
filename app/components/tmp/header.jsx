import React, { Component } from 'react'
import {Navbar , Container ,Nav } from 'react-bootstrap'
import { FaUserAlt,FaPlus,FaAngleDown} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import $ from 'jquery'

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
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" >
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
                            <button className='profile' onClick={() => window.location.href = "/login"}><FaUserAlt/>حسابي</button>
                            <button className='addCart' onClick={()=> {location.href='/login'}}><FaPlus/>أضف إعلان</button>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}