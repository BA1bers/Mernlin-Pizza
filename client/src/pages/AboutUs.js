import React from 'react';
import '../components/AboutUs/style.css'
import TheTeam from './TheTeam'

function AboutGroup() {

    return (
        <div className="aboutContainer">
            <div>
                <img src="../../images/MernlinHQ.jpg"></img>
                <img src="../../images/TheGreatAndPowerfulMernlin.png"></img>
                <h2>Paul Mernlin</h2>
                <h3>Founder and Owner</h3>
                <p>Paul Mernlin the owner of MERNlin’s Pizza wanted to bring his store into a new stage by adding in digital online ordering website application. MERNlin’s Pizza was started in 2000 and has one historic location in downtown Scottsdale. Family own sense day one, we include everyone into our pizza family.</p>
            </div>
            <div className="teammateWrapper">
                <TheTeam />
                <TheTeam />
            </div>
            <div className="teammateWrapper">
                <TheTeam />
                <TheTeam />
            </div>
        </div>
    );
}

export default AboutGroup;

// {/* <section id="theTeam">
//                 <div className="flex-row">
//                     <h2 className="section-title primary-border">
//                         Meet The Team
//                     </h2>
//                 </div>
//             </section>
//             <div className="teamMembers">
//                 <article className="teammmate">
//                     <img src="../../images/mozzerellaSticks.png" alt="Robert Fuke" />
//                     <div className="teamMemberAbout">
//                         <h3 className="teammmateName">Robert Fuke</h3>
//                         <h4 className="teamRole">Website Co-Designer Backend</h4>
//                         <p>TBD</p>
//                     </div>
//                 </article>

//                 <article className="teammmate">
//                     <img src="../../images/mozzerellaSticks.png" alt="Bryan Daniel" />
//                     <div className="teamMemberAbout">
//                         <h3 className="teammmateName">Bryan Daniel</h3>
//                         <h4 className="teamRole">Website Co-Designer Frontend/Backend</h4>
//                         <p>TBD</p>
//                     </div>
//                 </article>

//                 <article className="teammmate">
//                     <img src="../../images/mozzerellaSticks.png" alt="Bryce Sitler" />
//                     <div className="teamMemberAbout">
//                         <h3 className="teammmateName">Bryce Sitler</h3>
//                         <h4 className="teamRole">Website Co-Designer Frontend</h4>
//                         <p>TBD</p>
//                     </div>
//                 </article>

//                 <article className="teammmate">
//                     <img src="../../images/mozzerellaSticks.png" alt="Brent Albers" />
//                     <div className="teamMemberAbout">
//                         <h3 className="teammmateName">Brent Albers</h3>
//                         <h4 className="teamRole">Website Co-Designer Frontend</h4>
//                         <p>TBD</p>
//                     </div>
//                 </article>
//             </div>

//             {/* <div>
//                 <div>
//                     <img></img>
//                     <h3>Brent Albers</h3>
//                     <h4>Website Co-Designer Frontend</h4></div>
//                     <p>TBD</p>
//                 <div>
//                     <img></img>
//                     <h3>Bryan Daniel</h3>
//                     <h4>Website Co-Designer Backend</h4></div>
//                     <p>TBD</p>
//                 <div>
//                     <img></img>
//                     <h3>Bryce Sitler</h3>
//                     <h4>Website Co-Designer Frontend</h4></div>
//                     <p>TBD</p>
//                 <div>
//                     <img></img>
//                     <h3>Robert Fluke</h3>
//                     <h4>Website Co-Designer Backend</h4></div>
//                     <p>TBD</p>
//             </div> */} */}