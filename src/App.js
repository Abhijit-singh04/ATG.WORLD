import React from "react"
import Header from "./header/Header"
import Cards from "./cards/Cards"
import CardType2 from "./cards_type2/CardType2"
import CardType3 from "./cards_type3/CardType3"
import Card1 from "./cards/card1.png"
import Card2 from "./cards/card2.png"
import Card3 from "./cards_type2/meetup.png"
import dp1 from './cards/dp1.png'
import dp2 from './cards/dp2.png'
import dp3 from './cards_type2/dp3.png'
import './App.css'

function App() {
  return (
    <>
    <Header/>
    <div className="cards-container">
    <Cards
    card_image={Card1}
    about="✍️ Article"
    topic="What if famous brands had regular fonts? Meet RegulaBrands!"
    answer="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
    dp={dp1}
    user_name="Sarthak Kamra"
    views="1.4k views" 
    />
    <Cards
    card_image={Card2}
    about="🔬 Education"
    topic="Tax Benefits for Investment under  Pension Scheme launched by Government"
    answer="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
    dp={dp2}
    user_name="Sarah West"
    views="1.4k views" 
    />
    <CardType2
    card_image={Card3}
    about="🗓️ Meetup"
    topic="Finance & Investment Elite Social Mixer @Lujiazui"
    answer="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
    dp={dp3}
    user_name="Ronal Jones"
    views="1.4k views" 
    />
    <CardType3
    card_image={Card3}
    about="💼️ Job"
    topic="Finance & Investment Elite Social Mixer @Lujiazui"
    answer="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
    dp={dp3}
    user_name="Ronal Jones"
    views="1.4k views" 
    />
   
    </div>
    

    </>
    
  );
}

export default App;
