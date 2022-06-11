import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css.map'
import './Cards.css'
import image from './dots.png'
import share_image from './Vector.png'
import eye from './eye.png'









function Cards(props) {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={props.card_image} alt="slow net" />
                </div>
                <div className="card-about">{props.about}</div>
                <div className="card-topic">{props.topic}</div>
                <img src={image} alt="slow net" />
                <div className="answer">{props.answer}</div>
                <div className="dp">
                    <img src={props.dp} alt="slow net" />
                </div>
                <div className="user-name">{props.user_name}</div>
                <div className="share">
                <img src={share_image} alt="slow net" />
                    <div className="share-text">Share</div>
                    
                </div>
                <div className="eye-container">

                    <img src={eye} alt="" />

                </div>
                <div className="views">{props.views}</div>
            </div>
        </>
    )
}

export default Cards;