import React from 'react';
import Bryce from "../components/Images/bryce.jpeg"

function AboutGroup() {

    return (
        <div className="container">
            <div>
                <img></img>
                <img></img>
                <h2>Paul Mernlin</h2>
                <h3>Founder and Owner</h3>
                <p>Paul Mernlin the owner of MERNlin’s Pizza wanted to bring his store into a new stage by adding in digital online ordering website application. MERNlin’s Pizza was started in 2000 and has one historic location in downtown Scottsdale. Family own sense day one, we include everyone into our pizza family.</p>
            </div>
            <div>
                <div>
                    <img></img>
                    <h3>Brent Albers</h3>
                    <h4>Website Co-Designer Frontend</h4></div>
                    <p>TBD</p>
                <div>
                    <img></img>
                    <h3>Bryan Daniel</h3>
                    <h4>Website Co-Designer Backend</h4></div>
                    <p>TBD</p>
                <div>
                    <img src={Bryce}></img>
                    <h3>Bryce Sitler</h3>
                    <h4>Website Co-Designer Frontend</h4></div>
                    <p>TBD</p>
                <div>
                    <img></img>
                    <h3>Robert Fluke</h3>
                    <h4>Website Co-Designer Backend</h4></div>
                    <p>TBD</p>
            </div>
            
        </div>
        
    );
}

export default AboutGroup;