import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    return (

<>
<div className="header container">
  <Header/>
</div>

<div className="body container">
<Outlet/>
</div>

<div className="footer container">
  <Footer/>
</div>
</>

        
    )
}
