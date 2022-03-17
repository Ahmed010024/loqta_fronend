import React, { Component } from 'react'
import PageHeader from '../tmp/pageHeader'
import  {FaInfoCircle,FaRegStar,FaAngleRight,FaPhoneSquareAlt,FaUserCircle} from 'react-icons/fa'
import  {AiOutlineMail} from 'react-icons/ai'
import  {BsFillTelephoneFill} from 'react-icons/bs'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/ar'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(frenchStrings)

export default class AdPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showPhone: false,
        }
    }

    render() {
        return (
            <div className='ad'>
                <div className="container">
                    <PageHeader
                        branch={this.props.product.product.branch} 
                        category={this.props.product.product.category} 
                    />
                    <div className="adContnet">
                        <div className="adHeader">
                            <div className="adTitle">
                                <h3>{this.props.product.product.title}</h3>
                                <div className="adTitleContnet">
                                    <a href="">{this.props.product.product.city} - {this.props.product.product.area}</a>
                                    <p>تم إضافة الإعلان <TimeAgo date={this.props?.product.product.date} live formatter={formatter} />,  رقم الإعلان: {this.props.product.product.ID}</p>
                                </div>
                            </div>
                            <div className="adPrice">
                                <span>{this.props.product.product.price} ج.م</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="adImgage">
                                    <img src={this.props.product.images[0].img} alt="" />
                                </div>
                                <div className="adFav">
                                    <button>
                                        <FaRegStar/>
                                    أضف الى الإعلانات المفضّلة
                                    </button>
                                    <button>
                                        <FaInfoCircle/>
                                        بلّغ عن الإعلان
                                    </button>
                                </div>
                                <div className="adsContent">
                                   <div dangerouslySetInnerHTML={{__html: this.props.product.product.des}}></div>
                                   {this.props.product.images ? 
                                        <div className="adsImages">
                                            {this.props.product.images.map((img,index) => {
                                                return(
                                                    <img key={index} width={"100%"} src={img.img} alt="" />
                                                )

                                            })}
                                        </div>
                                    : null}
                                    <div className="backBtn mt-4">
                                        <button onClick={() => window.location.href = "/"}><FaAngleRight/> العودة للخلف</button>
                                    </div>
                                    <div className="adViews">
                                        <span>مشاهدات:</span>
                                        <span>13</span>
                                    </div>
                                </div>
                                <div className="adContact">
                                    <img className='contactImg' src="/images/contact.png" alt="" />
                                    <div className="phoneNum">
                                        <FaPhoneSquareAlt/>
                                        <span  onClick={() => {window.location.href = "tel://" + this.props.product.product.phone}} >{!this.state.showPhone ? "01xxxxxxx" :this.props.product.product.phone }</span>
                                        <a href="javascript:void(0)" onClick={() => {
                                            this.setState({showPhone:true})
                                        }}>اظهر الرقم</a>
                                    </div>
                                    <div className="inputBox">
                                        <input type="text" placeholder='إيميلك' />
                                    </div>
                                    <div className="inputBox">
                                        <textarea placeholder='الرسالة' rows={8}></textarea>
                                    </div>
                                    <div className="sentBtn">
                                        <button><AiOutlineMail/>إرسال</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="adSide">
                                    <button><AiOutlineMail/>ارسل رسالة</button>
                                    <button 
                                    onClick={() => {this.setState({showPhone:true})}}
                                    ><BsFillTelephoneFill />{!this.state.showPhone ? " اظهر الرقم" : <span onClick={() => {this.setState({showPhone:true})}}> {this.props.product.product.phone} </span>}</button>
                                    <div className="safetyBox">
                                        <span>سلامتك تهمنا</span>
                                        <ol>
                                            <li>قابل البايع في مكان عام زي المترو أو المولات أو محطات البنزين</li>
                                            <li>خد حد معاك وانت رايح تقابل اي حد</li>
                                            <li>عاين المنتج كويس قبل ما تشتري وتأكد ان سعره مناسب</li>
                                            <li>متدفعش او تحول فلوس الا لما تعاين المنتج كويس</li>
                                        </ol>
                                    </div>
                                    <div className="userBox">
                                        <div>
                                            <img height={50} width={50} style={{borderRadius:50}} src={this.props.product.product.avatar} />
                                        </div>
                                        <div className='userData'>
                                            <span className='userName'>{this.props.product.product.full_name}</span>
                                            <span>على الموقع <TimeAgo date={this.props?.product.product.userdate} live formatter={formatter} /></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
