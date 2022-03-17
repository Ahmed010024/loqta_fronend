import React, { Component } from 'react'
import {FaAngleRight } from 'react-icons/fa'

export default class PageHeader extends Component {
    constructor(props) {
        super(props)
        console.log(this.props,"propsprops")
    }
    render() {
        return (
            <div className="pageTop">
                <div className="backBtn">
                    <button><FaAngleRight/> العودة للخلف</button>
                </div>
                <div className="pageRoot">
                    <a href="/">الرئيسية</a>
                    <a href="/ads">{this.props.branch}</a>
                </div>
            </div>
        )
    }
}
