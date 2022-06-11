import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css.map'
import './Card2.css'
import image from '../cards/dots.png'
import share_image from '../cards/Vector.png'
import eye from '../cards/eye.png'


import calender from "./calender.png"
import location from "./location.png"








function CardType2(props) {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={props.card_image} alt="slow net" />
                </div>
                <div className="card-about">{props.about}</div>
                <div className="card-topic">{props.topic}</div>
                <img src={image} alt="slow net" />
               <div className="calender-icon">
                   <img src={calender} alt="no net"/>
               </div>
               <div className="date">Fri, 12 Oct, 2018</div>
               <div className="location-icon">
                   <img src={location} alt="no net"/>
               </div>
               <div className="location-text">Ahmedabad, India</div>
               <div className="card-link">
                   <div className="card-link-text">Visit Website</div>
               </div>
                <div className="dp">
                    <img src={props.dp} alt="slow net" />
                </div>
                <div className="user-name">{props.user_name}</div>
                <div className="share">
                    <img src={share_image} alt="slow net" />
                </div>
                <div className="eye-container">
                    <img src={eye} alt="" />
                </div>
                <div className="views">{props.views}</div>
            </div>
        </>
    )
}

export default CardType2;