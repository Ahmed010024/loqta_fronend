import React from 'react'

import Footer from "~/components/tmp/footer";
import Header from "~/components/tmp/header";
import UserHeader from "~/components/tmp/userHeader";
import TopHeader from "~/components/tmp/topHeader";


export default function index(props) {
  return (
    <>
        {props.loaderData ? null : <TopHeader/>}
        {props.loaderData ? <UserHeader loaderData={props.loaderData}/> : <Header/>}
            {props.children}
        <Footer/>
    </>
  )
}
