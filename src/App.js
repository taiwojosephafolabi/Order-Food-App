import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ApiDatas from "./API/data.json";
import HomePage from "./components/HomePage";
import MainMenuPage from "./components/MainMenuPage";
import BasketPage from "./components/BasketPage";
import "./App.css";

function App() {

  const [mainPage, setMainPage] = useState(true);
  const [selectedFood, setSelectedFood] = useState(null);
  const [orders, setOrders] = useState(1);
  const [orderPrices, setOrderPrices] = useState(null);
  const [basket, setBasket] = useState(false);
  const [basketItems, setBasketItems] = useState();
  let dataTypes = ApiDatas.map((data) => data.type);
  let TypesOfOrder = dataTypes.filter(
    (data, index, newData) => newData.indexOf(data) === index
  );
    
    
    useEffect(() => {
      if(selectedFood !== null)
      console.log("selectedFood = ", selectedFood);
    }, [selectedFood])

  const AddOrder = () => {
    setOrders(orders + 1);
    setOrderPrices(selectedFood.price * (orders + 1));
    console.log(basket)
  };
  const CancelOrder = () => {
    setOrders(1);
    setOrderPrices(selectedFood.price);
  };
  const MinusOrder = () => {
    if (orders - 1 > 0) {
      setOrders(orders - 1);
      setOrderPrices(orderPrices - selectedFood.price);
    } else {
      setOrders(1);
    }
  };

  const GoBack = () => {
    console.log(basket)
    setBasket(false);
  };

  let currentPage;
  if (mainPage === true) {
    currentPage = <HomePage mainPage={mainPage} setMainPage={setMainPage} />;
  } else {
    if (basket === false) {
      currentPage = (
        <MainMenuPage
          TypesOfOrder={TypesOfOrder}
          ApiDatas={ApiDatas}
          setSelectedFood={setSelectedFood}
          setBasket={setBasket}
          // basketItems={basketItems}
          setBasketItems={setBasketItems}
          selectedFood={selectedFood}
        />
      );
    } else if (basket === true) {
      currentPage = (
        <BasketPage
          selectedFood={selectedFood}
          AddOrder={AddOrder}
          CancelOrder={CancelOrder}
          MinusOrder={MinusOrder}
          orderPrices={orderPrices}
          orders={orders}
          GoBack={GoBack}
        />
      );
    } else {
      currentPage = <div>Something went wrong</div>;
    }
  }

  return <div>{currentPage}</div>;
}

export default App;
