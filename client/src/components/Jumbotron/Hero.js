import React from "react";
import heropic1 from "../Images/Mernlin.png"

import './style.css'

function Hero() {
  return (
    <div className="heroHeader" id="homePageHeader">
    <div className="heroContainer">
        <div className="row">
            <div className="col-6">
                <div className="headerDetails">
                    <div className="headerSection">
                        
                        <h1>
                            MERNlin's Pizza
                        </h1>
                        <p>
                            The most magical pizza in the world
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="Merlinimg">
                    <img src={heropic1} alt="merlin" />
                </div>
            </div>
        </div>
    </div>
</div>
      

  )
}

export default Hero;
