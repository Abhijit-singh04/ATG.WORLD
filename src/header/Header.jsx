import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css.map'
import './Header.css'
import image from './Vector1.png'
import logo from './whole.png'
import image1 from './arrow.png'

function Header(){
    return(
        <>
        <div className="navbar-container">
            <div className="left-container">
            
               <img src={logo} alt="slow net"/>
           
            </div>
            <div className="middle">
                <div className="search-bar">
                    <div className="icon-container">
                    <img src={image} alt="slow net" />
                    </div>
                    <input className="placeholder" type="text" placeholder="Search for your favorite groups in ATG"/>
                </div>
            </div>
            <div className="right">Create account. <span>It’s free!</span>
            <div className="arrow">
            <img src={image1} alt="slow net" />
            </div>
            </div>
            
        </div>,
        <div className="image-container">
            <div className="body-image"></div>
            <div className="Computer-engineering">Computer Engineering</div>
            <div className="number-facts">142,765 Computer Engineers follow this</div>
        </div>,
        <div className="line"></div>
        <div className="line0"> 
        </div>,
        <div className="tabs">
            <div className="all-post">All Posts(32)</div>
            <div className="article">Article</div>
            <div className="event">Event</div>
            <div className="education">Education</div>
            <div className="job">Job</div>
        </div>
        </>
    )
}

export default Header;