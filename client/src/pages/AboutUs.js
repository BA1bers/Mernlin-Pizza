import React from 'react';
import '../components/AboutUs/style.css'
import TheTeam from './TheTeam'
import Bryce from '../components/Images/brycesphoto.jpg'

function AboutGroup() {

    return (
        <div className="aboutContainer">
            <div>
                <img className='pic' src="../../images/Company.png"></img>
            <div className="bluebox">
                <h2>Paul Mernlin</h2>
                <h3>Founder and Owner</h3>
                <p>Paul Mernlin the owner of MERNlin’s Pizza wanted to bring his store into a new stage by adding in digital online ordering website application. MERNlin’s Pizza was started in 2000 and has one historic location in downtown Scottsdale. Family own sense day one, we include everyone into our pizza family.</p>
            </div>
            </div>
            
            <div className="teammateWrapper">
                <TheTeam teamImage="../../images/robertsphoto.jpg" memberName="Robert Fuke" teamRole="Website Co-Designer Backend" personal="Twenty years of Professional experience in computers and software systems. Now is the time for a lifestyle change and Code baking!" />
                <TheTeam teamImage="../../images/Bryan'sPhoto.jpg" memberName="Bryan Daniel" teamRole="Website Co-Designer Frontend/Backend" personal="Started working in the microchip industry as an electronic test engineer. Sense returned to school to switch to full stack web developer." />
            </div>
            <div className="teammateWrapper">
                <TheTeam teamImage={Bryce} memberName="Bryce Sitler" teamRole="Website Co-Designer Frontend" personal="Started as QA about 7 months ago for a company called Credence llc. Wanted to climb the ranks of the company to become a Dev. Now thanks to Trilogy this is possible! P.S Oliver Grey Sitler is due on January 26th 2022." />
                <TheTeam teamImage="../../images/brentsphoto.jpg" memberName="Brent Albers" teamRole="Website Co-Designer Frontend" personal="Started as a mechanical engineer with no prior knowlege of coding. Changed career paths to web development.  Aspiring frontend developer who wants to build aesthetically pleasing designs with polished UI systems" />
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