import React, { Component } from 'react'
import {FaThumbsUp} from 'react-icons/fa'
import {AiOutlineMail,AiFillSchedule} from 'react-icons/ai'
export default class Footer extends Component {
    constructor(props){
        super(props)
        this.state ={
            categ:["عربيات وقطع غيار","عربيات وقطع غيار","عربيات وقطع غيار","عربيات وقطع غيار","عربيات وقطع غيار"]
        }
    }
    render() {
        return (
            <div className='footer' style={{backgroundImage:"url(/images/footer.png)"}}>
                <div className="container">
                    <div className="footerDis">
                        <div className="footerDisContent">
                            <p>لقطة هو أفضل موقع محلّي للإعلانات المُبوبة. حيث ستتمكّن من بيع وشراء أي شيئ ممكن أن تتخيله، من موبايلك القديم والمقاعد التي مللت منها أو حتى سيارتك، أو الشقة التي تسكن فيها. والأفضل من ذلك، قد تتمكن من العثور على وظيفة أحلامك بفضل لقطة</p>
                            <p>هل تود بيع شيء ما؟ لقطة هو أسهل وأسرع مكان لوضع إعلانك.</p>
                        </div>
                        <div className="facebookFollow">
                            <div style={{backgroundImage:"url(/images/like.png)"}}></div>
                            <button><FaThumbsUp/>Like 4.3M</button>
                        </div>
                    </div>
                    <div className="footerCateg">
                        <h3>الفئات الأساسية:</h3>
                        {this.state.categ.map((categ,index) =>
                            <a href="/" key={index}>{categ}</a>
                        )}
                    </div>
                    <div className="footerMain">
                        <div className="row">
                            <div className="col-md-3 col-6">
                                <img src="/logo.png" alt="" />
                            </div>
                            <div className="col-md-3 col-6">
                                <a href="/" >تعرف علينا</a>
                                <a href="/" >وظائف</a>
                                <a href="/" >قواعد السلامة</a>
                            </div>
                            <div className="col-md-3 mt-4 col-6">
                                <a href="/" >الأسئلة الأكثر تداولا</a>
                                <a href="/" >شروط الإستخدام</a>
                                <a href="/" >سياسة الخصوصية</a>
                                <a href="/" >خريطة الموقع</a>
                            </div>
                            <div className="col-md-3 mt-4 col-6">
                                <span>تواصل معنا</span>
                                <div className="contactBar">
                                    <AiOutlineMail/>
                                    <a href="/" >خدمة العملاء</a>
                                </div>
                                <div className="contactBar">
                                    <AiFillSchedule/>
                                    <a href="/" >لقطة بيزنس</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
