import React, { useState , useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ApiDatas from "./API/data.json";
import HomePage from "./components/HomePage";
import MainMenuPage from "./components/MainMenuPage";
import BasketPage from "./components/BasketPage";
import "./App.css";

function App() {
  const [mainPage, setMainPage] = useState(true);
  const [selectedFood, setSelectedFood] = useState();
  const [orders, setOrders] = useState(1);
  const [orderPrices, setOrderPrices] = useState();
  const [basket,setBasket] = useState(false);
  let dataTypes = ApiDatas.map((data) => data.type);
  let TypesOfOrder = dataTypes.filter(
    (data, index, newData) => newData.indexOf(data) === index
  );
  
  
useEffect(() => {
  console.log("Food")
  setBasket(true)
  },[selectedFood])

  const AddOrder = () => {
    setOrders(orders + 1);
    setOrderPrices(selectedFood.price * (orders + 1)) ;
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

 

  let currentPage;
  if (mainPage === true) {
    currentPage =  <HomePage mainPage={mainPage} setMainPage={setMainPage}/>;
  }

  else {
    if(basket === false){
    currentPage = <MainMenuPage 
    TypesOfOrder={TypesOfOrder}
    ApiDatas={ApiDatas} 
    setSelectedFood={setSelectedFood}
    setBasket={setBasket}
    />
    }
    else if(basket === true){
    currentPage = (
      <BasketPage 
      selectedFood = {selectedFood}
      AddOrder={AddOrder}
      CancelOrder={CancelOrder}
      MinusOrder={MinusOrder}
      orderPrices={orderPrices}
      orders={orders}
      />
    )
    }
    else{
      <div>Something is wrong</div>
    }
  }

  return <div>{currentPage}</div>;
}

export default App;
