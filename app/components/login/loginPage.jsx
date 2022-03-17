import axios from 'axios'
import React, { Component } from 'react'
import { API } from '~/config/variables'
import Cookies from 'js-cookie'

export default class LoginPage extends Component {

    constructor(props){
        super(props)
        this.userNameOrEmail = React.createRef(null)
        this.password = React.createRef(null)
    }

    login = () => {
        var userNameOrEmail = this.userNameOrEmail.current.value
        var password = this.password.current.value
        axios.post(`${API}/user/auth`,{
            userNameOrEmail,password
        }).then((res) => {
            if(res.status === 200){
                Cookies.set('token', res.data.token)
                window.location = "/"
            }

        }).catch((err) => {
            console.log(err)

        }) }

    render() {
        return (
            <div className='login'>
                <div className="container">
                    <div className="loginContent">
                        <h4>سجّل الدخول</h4>
                        <div className="loginBox">
                            <div className="inputBox">
                                <input ref={this.userNameOrEmail} type="text" placeholder='رقم الهاتف' />
                            </div>
                            <div className="inputBox">
                                <input ref={this.password} type="password" placeholder='كلمة السر' />
                            </div>
                            <div className="inputBox remember">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1">تذكرني</label>
                            </div>
                            <button onClick={() => this.login()}>سجل الدخول</button>
                            <div className="formLinks">
                                <a href="">نسيت كلمة السر؟</a>
                                <a href="/signup">انشئ حساب جديد</a>
                            </div>
                        </div>
                        <span className='alert'>
                            بتسجيل الدخول تكون قد قبلت شروط استخدام الموقع
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
