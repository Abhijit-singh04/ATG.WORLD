import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css.map'
import './Card3.css'
import image from '../cards/dots.png'
import share_image from '../cards/Vector.png'
import eye from '../cards/eye.png'


// import calender from "./calender.png"
import location from "../cards_type2/location.png"








function CardType3(props) {
    return (
        <>
            <div className="card_another">
                
                <div className="card-about">{props.about}</div>
                <div className="card-topic">{props.topic}</div>
                <img src={image} alt="slow net" />
               <div className="company-icon">
                   <img src="" alt="no net"/>
               </div>
               <div className="date_another">Fri, 12 Oct, 2018</div>
               <div className="location-icon_another">
                   <img src={location} alt="no net"/>
               </div>
               <div className="location-text_another">Ahmedabad, India</div>
               <div className="card-link_another">
                   <div className="card-link-text_another">Apply on Timesjobs</div>
               </div>
                <div className="dp_another">
                    <img src={props.dp} alt="slow net" />
                </div>
                <div className="user-name_another">{props.user_name}</div>
                <div className="share_another">
                    <img src={share_image} alt="slow net" />
                </div>
                <div className="eye-container_another">
                    <img src={eye} alt="" />
                </div>
                <div className="views_another">{props.views}</div>
            </div>
        </>
    )
}

export default CardType3;