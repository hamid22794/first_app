import React from 'react'
import Header from './header'
import Footer from './footer'
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineDown} from "react-icons/ai"
import logoImg from "../images/logo/logo.svg"

const Layout = ({children}) => {
  return (
    <>
    <Header logo={logoImg} icon = {<BsFillTelephoneFill />} icon1 = {<AiOutlineDown color='#C4C4C4' />}/>
    {children}
    <Footer logo={logoImg} icons = {<BsFillTelephoneFill />} />
    </>
  )
}
export default Layout