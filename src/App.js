import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ApiDatas from "./API/data.json";
import HomePage from "./components/HomePage";
import MainMenuPage from "./components/MainMenuPage";
import BasketPage from "./components/BasketPage";
import "./App.css";

function App() {
  const [page, setPage] = useState("Main Page");
  const [cart, setCart] = useState([]);
  const [amountOfOrder,setAmountOfOrder] = useState();

  console.log("cart", cart);

  let typeOfEachApiData = ApiDatas.map((data) => data.type);
  let AllApiTypes = typeOfEachApiData.filter(
    (data, index, newData) => newData.indexOf(data) === index
  );

  const RemoveFoodFromCart = (foodToRemove) => {
    let newShoppingCart = cart.filter((food) => food !== foodToRemove);
    setCart(newShoppingCart);
  };

  const addToCart = (newFood) => {
    if (cart.includes(newFood)) {
      newFood.quantity += 1;
      console.log("NewCart",cart);
    } 
    else {
      newFood.quantity = 1;
      let newCart = cart.slice();
      newCart.push(newFood);
      setCart(newCart);
      console.log("cart",cart);
    }
  };

  const addMoreOrders = (newFood) => {
    setAmountOfOrder(newFood.quantity += 1);
  }

  const reduceOrders = (newFood) => {
    setAmountOfOrder(newFood.quantity -= 1);
  }


  const GoBack = () => {
    setPage("Menu Page");
  };

  let currentPage;
  if (page === "Main Page") {
    currentPage = <HomePage setPage={setPage} />;
  } else {
    if (page === "Menu Page") {
      currentPage = (
        <MainMenuPage
          AllApiTypes={AllApiTypes}
          ApiDatas={ApiDatas}
          cart={cart}
          setCart={setCart}
          setPage={setPage}
          addToCart={addToCart}
        />
      );
    } else if (page === "Shopping List") {
      currentPage = (
        <BasketPage
          cart={cart}
          GoBack={GoBack}
          RemoveFoodFromCart={RemoveFoodFromCart}
          addMoreOrders={addMoreOrders}
          amountOfOrder={amountOfOrder}
          reduceOrders={reduceOrders}
        />
      );
    } else {
      currentPage = <div>Something went wrong</div>;
    }
  }

  return <div>{currentPage}</div>;
}

export default App;
