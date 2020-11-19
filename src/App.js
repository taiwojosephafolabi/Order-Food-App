import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ApiDatas from "./API/data.json";
import HomePage from "./components/HomePage";
import MainMenuPage from "./components/MainMenuPage";
import BasketPage from "./components/BasketPage";
import "./App.css";

function App() {
  const [mainPage, setMainPage] = useState(true);
  const [page, setPage] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

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
    return (newFood.quantity === 0) ? (setCart([...cart, { ...newFood }])) : ( setQuantity(newFood.quantity + 1));
  };

  const GoBack = () => {
    setPage("Menu Page");
  };

  let currentPage;
  if (mainPage === true) {
    currentPage = (
      <HomePage
        mainPage={mainPage}
        setMainPage={setMainPage}
        setPage={setPage}
      />
    );
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
          // quantity={quantity}
        />
      );
    } else if (page === "Shopping List") {
      currentPage = (
        <BasketPage
          cart={cart}
          GoBack={GoBack}
          RemoveFoodFromCart={RemoveFoodFromCart}
          quantity={quantity}
          // quantity={quantity}
        />
      );
    } else {
      currentPage = <div>Something went wrong</div>;
    }
  }

  return <div>{currentPage}</div>;
}

export default App;
