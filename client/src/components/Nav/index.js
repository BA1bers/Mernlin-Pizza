import React, { useEffect } from 'react';
import MERNlinLogo from '../Images/MERNlinLogo.png';
import OrderButton from '../Images/orderNowButton.png';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import './style.css'

function Nav() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/OrderHistory" className="orderHistory">
              Order History
            </Link>
          </li>
          <li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a className="logOut" href="/" onClick={() => Auth.logout()}>
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
          <Link to="/Hero" className="logoCircle">
            <img src={MERNlinLogo} alt="MERNLinLogo" />
          </Link>
          <div className="navbarLeft">
            <button onClick={() => {
                  handleClick("");
                }}>
              <Link to="/Hero" className="navLinks">

                Home
              </Link>
            </button>
            <h2></h2>
            {categories.map((item) => (
              <button
                key={item._id}
                onClick={() => {
                  handleClick(item._id);
                }}
              >
                <Link className="navLinks" to="/">
                  {item.name}
                </Link>
              </button>
            ))}
            <button>
              <Link to="/ContactUs" className="navLinks">
                Contact
              </Link>
            </button>
            <button>
              <Link to="/AboutUs" className="navLinks">
              About Us
              </Link>
            </button>
          </div>
        </div>
      </div>
      {showNavigation()}
    </nav>
  );
}

export default Nav;
