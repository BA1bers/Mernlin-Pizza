import React from "react";
import Heropic from '../Images/herophoto.png'

function Hero() {
  return (
      <div>
        <h1>MERNlin's Pizza</h1>
        <img src={Heropic} />
        <p>The Most Magical Pizza in the world</p>
      <button className='herobtn'>Order Now</button>
      </div>
      
  )
}

export default Hero;
