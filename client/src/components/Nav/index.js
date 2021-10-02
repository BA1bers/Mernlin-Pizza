import React from "react";
import MERNlinLogo from '../Images/MERNlinLogo.png'
import OrderButton from '../Images/orderNowButton.png'
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory" className="orderHistory">
              Order History
            </Link>
          </li>
          <li className="logOut">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Log Out
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div>
          <Link to="/signup" className="signUp">
            <span>Sign Up</span>
          </Link>
          <Link to="/login" className="logIn">
            <span>Log In</span>
          </Link>
        </div>
      );
    }
  }

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
          <Link to="/" className="logoCircle">
            <img src={MERNlinLogo} alt="MERNLinLogo" />
          </Link>
          <ul className="navbarLeft">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link>
                Pizza
              </Link>
            </li>
            <li>
              <Link>
                Appetizers
              </Link>
            </li>
            <li>
              <Link>
                Salads
              </Link>
            </li>
          </ul>
          <ul className="navbarRight">
            <li>
              <Link>
                Menu
              </Link>
            </li>
            <li>
              <Link>
                Rewards
              </Link>
            </li>
            <li>
              <Link to="/ContactUs">
                Contact
              </Link>
            </li>
            <li>
              <Link>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="orderButton">
          <div id="orderNow">
            <img src={OrderButton} alt="OrderButton" />
          </div>
        </div>
      </div>
      {showNavigation()}
    </nav>

    // <header className="flex-row px-1">
    //   <h1>
    //     <Link to="/">
    //       <span role="img" aria-label="shopping bag">🍕</span>
    //       MERNlin-Pizza
    //     </Link>
    //   </h1>

    //   <nav>
    //     
    //   </nav>
    // </header>
  );
}

export default Nav;
