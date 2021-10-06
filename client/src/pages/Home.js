import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { useStoreContext } from '../utils/GlobalState';
import Jumbotron from "../components/Jumbotron/Hero";
import '../components/Jumbotron/style.css'

const Home = () => {

  const [state, dispatch] = useStoreContext();

  return (
    <div className="container backgroundImage">
      {console.log(state)}
      {state.currentCategory === ""? <Jumbotron />:<ProductList /> }

      <Cart />
    </div>
  );
};

export default Home;
