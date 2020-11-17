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
  let dataTypes = ApiDatas.map((data) => data.type);
  let TypesOfOrder = dataTypes.filter(
    (data, index, newData) => newData.indexOf(data) === index
  );

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
          TypesOfOrder={TypesOfOrder}
          ApiDatas={ApiDatas}
          cart={cart}
          setCart={setCart}
          setPage={setPage}
        />
      );
    } else if (page === "Shopping List") {
      currentPage = (
        <BasketPage GoBack={GoBack} cart={cart} setCart={setCart} />
      );
    } else {
      currentPage = <div>Something went wrong</div>;
    }
  }

  return <div>{currentPage}</div>;
}

export default App;
