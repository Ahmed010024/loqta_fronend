import React, { Component } from 'react';

export default class TopHeader extends Component {
    render() {
        return (
            <div className='topheader'> 
                <div className="container">
                    <div className="topHeaderContent">
                        <p>حسابك دلوقتي بقى برقم موبايلك! واحتفظ بإعلاناتك المفضلة ومراسلاتك كلها</p>
                        <button onClick={() => window.location.href ="/signup"}>سجل دلوقتي</button>
                    </div>
                </div>
            </div>
        );
    }
}
