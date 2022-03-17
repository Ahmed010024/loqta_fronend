import axios from 'axios';
import Cookies from 'js-cookie';
import React, { Component } from 'react'
import {MdAddAPhoto, MdDataSaverOn} from 'react-icons/md'
import { API } from '~/config/variables';
export default class NewAd extends Component {
    constructor(props){
        super(props)
        this.state = {
            file: [],
            files: [],
            branch:[],
            categ:[],
            subCateg:[],
            city:[],
            area:[]

        }
        this.onChange = this.onChange.bind(this);
        this.logoRef = React.createRef();
        this.title = React.createRef();
        this.branch = React.createRef();
        this.categ = React.createRef();
        this.subCateg = React.createRef();
        this.des = React.createRef();
        this.city = React.createRef();
        this.area = React.createRef();
        this.phone = React.createRef();
        this.price = React.createRef();

    }
    onChange(event) {
        const files = this.state.files;
        const file = this.state.file;

        for(var x=0;x<event.target.files.length;x++){
            files.push(event.target.files[x])
            file.push(URL.createObjectURL(event.target.files[x]))
        }

        this.setState({
            files:files,
            file:file
        });
        
    }
    handleImgDelete =()=> {
        this.setState({file:null})
    }

    componentDidMount(){
        this.getBranches();
        this.getCities();

    }
    branchHandle = (event) => {
        var ID = event.target.value;
        this.getCateg(ID);
        this.setState({
            subCateg:[]
        })
    }
    getBranches = () => {
        axios.get(`${API}/branch`).then((res) => {
            if(res.status === 200){
                this.setState({
                    branch:res.data.branch
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    categHandle = (event) => {
        var ID = event.target.value;
        this.getSubCateg(ID);
    }
    getCateg = (branch) => {
        axios.get(`${API}/category/${branch}`).then((res) => {
            if(res.status === 200){
                this.setState({
                    categ:res.data.categ
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    getSubCateg = (categ) => {
        axios.get(`${API}/subcateg/${categ}`).then((res) => {
            if(res.status === 200){
                this.setState({
                    subCateg:res.data.subCateg
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

    handleAddProduct = () => {

        var title = this.title.current.value;
        var branch = this.branch.current.value;
        var categ = this.categ.current.value;
        var subCateg = this.subCateg.current.value;
        var des = this.des.current.value;
        var city = this.city.current.value;
        var area = this.area.current.value;
        var phone = this.phone.current.value;
        var files = this.state.files;
        var price = this.price.current.value;

        var dataProduct = new FormData()
        dataProduct.append("title",title)
        dataProduct.append("branch",branch)
        dataProduct.append("categ",categ)
        dataProduct.append("subCateg",subCateg)
        dataProduct.append("des",des)
        dataProduct.append("city",city)
        dataProduct.append("area",area)
        dataProduct.append("phone",phone)
        dataProduct.append("price",price)


        // for(var x=0;x<this.state.files.length;x++){
        //     console.log(this.state.files[x])
        //     dataProduct.append("image",this.state.files[x])
        // }
        files.forEach((file,index) => {
            console.log(file)
            dataProduct.append(`image-${index}`, file);
        });

          axios({
            method: "post",
            url:`${API}/product/new`,
            data: dataProduct,
            headers: { "Content-Type": "multipart/form-data",'Authorization': `${Cookies.get("token")}` },
        
          }).then((res) => {
            if(res.status === 200){
                window.location.href = "/product/" +res.data.product
            }
        }).catch((err) => {
            console.log(err);
        })

    }
    render() {
        return (
            <div className='newAd'>
                <div className="container">
                    <div className="newAdContnet">
                        <h6 className='newTitle'>أضف إعلان</h6>
                        <div className="newAdDate">
                            <div className="row">
                                <div className="col-md-6 mt-4">
                                    <div className="form-group">
                                        <h6>ادخل الإسم</h6>
                                        <input ref={this.title} className="form-control" type="type" placeholder='اسم الإعلان' required/>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="form-group">
                                        <h6>الفرع</h6>
                                        <select ref={this.branch} onChange={event => this.branchHandle(event)} className="form-control" >
                                            {this.state.branch.length > 0 ?
                                                <>
                                                    <option  value="0">اختر قسم إعلانك</option>
                                                    {this.state.branch.map((item) => {
                                                        return (<option key={item.ID} value={item.ID}>{item.title}</option>)
                                                    })}
                                                </>
                                            : <option value="0">اختر قسم إعلانك</option> }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="form-group">
                                        <h6>القسم</h6>
                                        <select ref={this.categ} onChange={event => this.categHandle(event)}  className="form-control" >
                                            {this.state.categ.length > 0 ?
                                                <>
                                                    <option value="0">اختر قسم إعلانك</option>
                                                    {this.state.categ.map((item) => {
                                                        return (<option key={item.ID} value={item.ID}>{item.title}</option>)
                                                    })}
                                                </>
                                            : <option value="0">اختر فرع أولاً</option> }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="form-group">
                                        <h6>القسم الفرعي</h6>
                                        <select ref={this.subCateg} className="form-control" >
                                            {this.state.subCateg.length > 0 ?
                                                <>
                                                    <option value="0">اختر قسم إعلانك</option>
                                                    {this.state.subCateg.map((item) => {
                                                        return (<option key={item.ID} value={item.ID}>{item.title}</option>)
                                                    })}
                                                </>
                                            : <option value="0">اختر فرع أولاً</option> }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="form-group">
                                        <h6>السعر</h6>
                                        <input ref={this.price} className="form-control" type="number" placeholder='السعر' required/>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <div className="form-group">
                                        <h6>وصف إعلانك</h6>
                                        <textarea ref={this.des} className='form-control' rows="6"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <div className="form-group">
                                        <h6 className='mb-3'>صور إعلانك</h6>
                                        <div className="adPhotos">
                                            <div className="addPhoto">
                                                <input ref={this.logoRef} onChange={this.onChange} hidden type="file" id="addPhoto" multiple={true} />
                                                <label htmlFor="addPhoto">
                                                    <MdAddAPhoto/>
                                                </label>
                                            </div>
                                            {this.state.file ?
                                                this.state.file.map((item) => {
                                                    return <img src={item} alt="" />
                                                })
                                            :null}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="form-group">
                                        <h6>المدينة</h6>
                                        <select ref={this.city} onChange={event => this.cityHandle(event)} className="form-control" >
                                            {this.state.city.length > 0 ?
                                                <>
                                                    <option  value="0">اختر قسم إعلانك</option>
                                                    {this.state.city.map((item) => {
                                                        return (<option key={item.ID} value={item.ID}>{item.title}</option>)
                                                    })}
                                                </>
                                            : <option value="0">اختر قسم إعلانك</option> }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="form-group">
                                        <h6>المنطقة</h6>
                                        <select ref={this.area} className="form-control" >
                                            {this.state.area.length > 0 ?
                                                <>
                                                    <option  value="0">اختر قسم إعلانك</option>
                                                    {this.state.area.map((item) => {
                                                        return (<option key={item.ID} value={item.ID}>{item.title}</option>)
                                                    })}
                                                </>
                                            : <option value="0">اختر قسم إعلانك</option> }
                                        </select>
                                        {/* <input ref={this.city} className="form-control" type="type" placeholder='اسم المدينة' required/> */}
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="form-group">
                                        <h6>رقم الهاتف</h6>
                                        <input ref={this.phone} className="form-control" type="tel" placeholder='ادخل رقم الهاتف' required/>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="form-group">
                                        <h6>الإيميل</h6>
                                        <input className="form-control" type="email" placeholder='ادخل الإيميل' required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className='newTitle mt-4'>الموافقة على شروط و أحكام الموقع</h6>
                        <div className="newAdDate">
                            <div className="form-group">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label className='mr-2' for="vehicle1"> بنشرك للإعلان، أنت توافق على شروط الإستخدام و قواعد النشر</label>
                            </div>
                        </div>
                        <div className="adSave">
                            <button onClick={() => this.handleAddProduct() }>أنشر الإعلان</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
