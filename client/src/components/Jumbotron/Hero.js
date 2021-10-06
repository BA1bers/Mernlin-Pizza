import React from "react";
import wings from "../Images/buffaloWingshome.png"
import cheesy from "../Images/20.png"
import Fried from "../Images/barstool.png"




import './style.css'

function Hero() {
  return (
    <div className="heroHeader" id="homePageHeader">
    <div className="heroContainer">
        <div className="row">
            
                <div className="headerDetails">
                    <div className="headerSection">
                        
                        <h1>
                            MERNlin's Pizza
                        </h1>
                        <h2>
                            The most magical pizza in the world
                        </h2>
                    </div>
                </div>
            
        </div>
    </div>
    <div class="Featured">
        <article class="Feature">
          <img src={wings} alt="Buffalo Wings" />
          <div class="Feature-bio">
            <h3 class="Feature-name">Buffalo Wings</h3>
            <h4 class="Feature-role">Customer Favorite</h4>
            <p>Try Our classic chicken wings smoothered in Buffalo Sauce, served with your choice Bleu cheese or Ranch dressing</p>
          </div>
        </article>

        <article class="Feature">
          <img src={cheesy} alt="20% off" />
          <div class="Feature-bio">
            <h3 class="Feature-name">Rewards</h3>
            <h4 class="Feature-role">Sign Up Bonus</h4>
            <p>For a limited time customers who sign up will recieve 20% off all orders!</p>
            </div>
          </article>

        <article class="Feature">
          <img src={Fried} alt="Barstool Pizza" />
          <div class="Feature-bio">
            <h3 class="Feature-name">Feedback</h3>
            <h4 class="Feature-role">Barstool Pizza</h4>
            <p>Barstool rated our pizza 10/10! Be sure to visit our contact page and let us know what you think!</p>
          </div>
        </article>
      </div>
    </div>




  
  )  
}


export default Hero;

