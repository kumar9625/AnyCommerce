import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

import { ToastContainer, toast } from "react-toastify";
import { type } from "@testing-library/user-event/dist/type";
import Buypage from "./Components/Buypage";
import { Container, Row, Col } from "reactstrap";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";


const App = () => {
  const [cartItem, setCartItem] = useState({});
  
  
  const addInCart = item => {
    const isAlreadyinCart = Array.from(cartItem).findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyinCart !== -1) {
      toast("already added in cart", {
        type: "error"
      });
      return;
    };

    setCartItem([...Array.from(cartItem), item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Item Purchased Successfully", {
      type: "success"
    });
  };

  const removeItem = item => {
    setCartItem(Array.from(cartItem).filter(singleitem => singleitem.id !== item.id))
  };


  return (
    <div>
      <ToastContainer />
      <Row>
        <Col md="8">

          <Buypage addInCart={addInCart} />

        </Col>

        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
      < Footer />

    </div>

  )
};

export default App;