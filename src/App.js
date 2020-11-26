  import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ApiDatas from "./API/data.json";
import HomePage from "./components/HomePage";
import MainMenuPage from "./components/MainMenuPage";
import BasketPage from "./components/BasketPage";
import Checkout from "./components/CheckOut";
import "./App.css";

function App() {
  const [page, setPage] = useState("Main Page");
  const [cart, setCart] = useState([]);

  let typeOfEachApiData = ApiDatas.map((data) => data.type);
  let AllApiTypes = typeOfEachApiData.filter(
    (data, index, newData) => newData.indexOf(data) === index
  );

  const RemoveFoodFromCart = (foodToRemove) => {
    if (cart.length >= 2) {
      let newShoppingCart = cart.filter((food) => food !== foodToRemove);
      setCart(newShoppingCart);
    } else {
      setPage("Menu Page");
      setCart([]);
    }
  };

  const addToCart = (newFood) => {
    if (cart.includes(newFood)) {
      newFood.quantity += 1;
    } else {
      newFood.quantity = 1;
      let newCart = cart.slice();
      newCart.push(newFood);
      setCart(newCart);
    }
  };

  const changeOrders = (newFood, event) => {
    if (event.target.value === "add") {
      newFood.quantity += 1;
      let newCart = cart.slice();
      setCart(newCart);
    } else if (event.target.value === "minus") {
      if (newFood.quantity > 1) {
        newFood.quantity -= 1;
        let newCart = cart.slice();
        setCart(newCart);
      }
      else{
        if(cart.length === 1){
          newFood.quantity = 0 ;
          setPage("Menu Page");
           setCart([]);
        }
        else{
          newFood.quantity = 0 ;
          let newShoppingCart = cart.filter((food) => food !== newFood);
          setCart(newShoppingCart);
        } 
      }
    }
  };

  const showMenuPage = () => {
    setPage("Menu Page");
  };

  const backToMainPage = () => {
    setPage("Main Page");
  };

  const backToMenu = () => {
    setPage("Menu Page");
  };

  const GoCheckOut = () => {
    setPage("check Out");
  };

  const GoToShoppingLists = () => {
    setPage("Shopping List");
  };

  let currentPage;
  if (page === "Main Page") {
    currentPage = <HomePage showMenuPage={showMenuPage} />;
  } else {
    if (page === "Menu Page") {
      currentPage = (
        <MainMenuPage
          AllApiTypes={AllApiTypes}
          ApiDatas={ApiDatas}
          cart={cart}
          setCart={setCart}
          backToMainPage={backToMainPage}
          GoToShoppingLists={GoToShoppingLists}
          addToCart={addToCart}
        />
      );
    } else if (page === "Shopping List") {
      currentPage = (
        <BasketPage
          cart={cart}
          backToMenu={backToMenu}
          RemoveFoodFromCart={RemoveFoodFromCart}
          changeOrders={changeOrders}
          GoCheckOut={GoCheckOut}
        />
      );
    } else if (page === "check Out") {
      currentPage = <Checkout GoToShoppingLists={GoToShoppingLists} />;
    } else {
      currentPage = <div>Something went wrong</div>;
    }
  }

  return <div>{currentPage}</div>;
}

export default App;
