import React from "react";
import logo from './assets/trlogo.png'



export default function Nav()
{
    return (
        <nav>
            <div className="nav-container">
                <img src={logo} className="menu-logo" />    
                <p className="site-name"> <span className="my">My</span>BlogTrav<span className="logo-surfix">el</span></p>
            </div>
        </nav>
    )
}