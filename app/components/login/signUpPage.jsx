import axios from 'axios'
import React, { Component } from 'react'
import { API } from '~/config/variables'
import Cookies from 'js-cookie'

export default class SignUpPage extends Component {

    constructor(props){
        super(props)
        this.userName= React.createRef(null)
        this.userNameOrEmail = React.createRef(null)
        this.password = React.createRef(null)
        this.actPassword = React.createRef(null)
    }

    sign = () => {
        var userName = this.userName.current.value
        var userNameOrEmail = this.userNameOrEmail.current.value
        var password = this.password.current.value
        var actPassword = this.actPassword.current.value
        if(password !=actPassword ){
            alert("رمزي المرور غير متطابقين")
        }else{
            axios.post(`${API}/user/sign`,{
                userName,userNameOrEmail,password
            }).then((res) => {
                if(res.status === 200){
                    Cookies.set('token', res.data.token)
                    window.location = "/"
                }
    
            }).catch((err) => {
                console.log(err)
    
            }) }
        }
    
    render() {
        return (
            <div className='login signup'>
                <div className="container">
                    <div className="loginContent">
                        <h4>أنشئ حساب جديد</h4>
                        <div className="row" style={{alignItems:"center"}}>
                            <div className="col-md-4">
                                <div className="loginBox">
                                    <div className="inputBox">
                                        <input ref={this.userName} type="text" placeholder='الإسم' />
                                    </div>
                                    <div className="inputBox">
                                        <input ref={this.userNameOrEmail} type="text" placeholder='رقم الهاتف' />
                                    </div>
                                    <div className="inputBox">
                                        <input ref={this.password} type="password" placeholder='كلمة السر' />
                                    </div>
                                    <div className="inputBox">
                                        <input ref={this.actPassword} type="password" placeholder='تأكييد كلمة السر' />
                                    </div>
                                    <div className="inputBox remember agree">
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label for="vehicle1">أوافق علي شروط الإستخدام</label>
                                    </div>
                                    <button onClick={() => this.sign()}>سجل الدخول</button>
                                    <div className="formLinks">
                                        <a href="">نسيت كلمة السر؟</a>
                                        <a href="/login">لديك حساب بالفعل ؟</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <span className='mb-3 d-block'>بإنشائك كلمة سر ستتمكن من الدخول إلى حسابك حيث ستتمكن من:</span>
                                <div className="signupData">
                                    <span>- تعديل أو حذف إعلاناتك </span>
                                    <span>- مشاهدة الردود على إعلاناتك </span>
                                    <span>- مشاهدة الإعلانات المفضّلة </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
