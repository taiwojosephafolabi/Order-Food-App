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

  let typeOfEachApiData = ApiDatas.map((data) => data.type);
  let AllApiTypes = typeOfEachApiData.filter(
    (data, index, newData) => newData.indexOf(data) === index
  );

  let sameOrdersByName = cart.map((food) => food.name);
  let orderNamesInCart = sameOrdersByName.filter((foodname, index, newCart) => newCart.indexOf(foodname) === index);

  const RemoveFoodFromCart = (foodToRemove) => {
     cart.filter((food) => food !== foodToRemove);
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
          // orderNamesInCart={orderNamesInCart}
        />
      );
    } else if (page === "Shopping List") {
      currentPage = (
        <BasketPage
          cart={cart}
          GoBack={GoBack}
          RemoveFoodFromCart={RemoveFoodFromCart}
          // addMore={addMore}
          // MinusOrder={MinusOrder}
        />
      );
    } else {
      currentPage = <div>Something went wrong</div>;
    }
  }

  return <div>{currentPage}</div>;
}

export default App;
