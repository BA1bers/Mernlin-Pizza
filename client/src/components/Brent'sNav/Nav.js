import React from 'react'
//import Auth from "../../utils/auth";
import MERNlinLogo from '../Images/MERNlinLogo.png'
//import { Link } from "react-router-dom";
import OrderButton from '../Images/orderNowButton.png'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <div className="resName">
                    <div id="resNameMERNlin">
                        <span>MERNlin's</span>
                    </div>
                    <div id="resNamePizza">
                        <span>Pizza</span>
                    </div>
                </div>
                <div className="yellowBar">
                    <div className="logoCircle">
                        <img src={MERNlinLogo} alt="MERNLinLogo" />
                    </div>
                    <ul className="navbarLeft">
                        <li>
                            Home
                        </li>
                        <li>
                            Pizza
                        </li>
                        <li>
                            Appetizers
                        </li>
                        <li>
                            Salads
                        </li>
                    </ul>
                    <ul className="navbarRight">
                        <li>
                            Menu
                        </li>
                        <li>
                            Rewards
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            About Us
                        </li>
                    </ul>
                </div>
                <div className="orderButton">
                    <div id="orderNow">
                        <img src={OrderButton} alt="OrderButton" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
