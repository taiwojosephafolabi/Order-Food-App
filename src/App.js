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
  const [wholeOrderPrices, setWholeOrderPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [amountOfOrders, setAmountOfOrders] = useState(0);
  const [orders, setOrders] = useState(0);

  let dataTypes = ApiDatas.map((data) => data.type);
  let TypesOfOrder = dataTypes.filter(
    (data, index, newData) => newData.indexOf(data) === index
  );
  let sameOrdersByName = cart.map(food => food.name);
  let orderNamesInCart = sameOrdersByName.filter((foodname , index , newCart) => newCart.indexOf(foodname) === index);



  useEffect(() => {
    if (cart.length !== 0){ 
      if(cart.length === 1){
      setWholeOrderPrices(cart.map((food) => food.price));
      setTotalPrice(wholeOrderPrices);
      setAmountOfOrders(1);
      }
      else{
      setWholeOrderPrices(cart.map((food) => food.price));
      let sumOfOrdersPrices = wholeOrderPrices.reduce(function (a, b) {return Number(a) + Number(b);}, 0);
      setTotalPrice(sumOfOrdersPrices);
      setAmountOfOrders(cart.length);
      }
    }
  }, [cart])
  
  const RemoveFoodFromCart = (foodToRemove) => {
    let newShoppingList = cart.filter((food) => food !== foodToRemove);
    setTotalPrice(totalPrice - foodToRemove.price);
    setAmountOfOrders(amountOfOrders - 1);
    setCart(newShoppingList);
  };

  const addMore = (food) => {
    setTotalPrice(totalPrice + (food.price * (orders + 1)));
    setAmountOfOrders(amountOfOrders + 1);
    setOrders(orders + 1)
  };

  const MinusOrder = (food) => {
    if (orders - 1 > 0) {
      setTotalPrice(totalPrice - (food.price * (orders - 1)));
      setAmountOfOrders(amountOfOrders - 1);
      setOrders(orders - 1);
    } 
    else {
      setOrders(amountOfOrders);
    }
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
          TypesOfOrder={TypesOfOrder}
          ApiDatas={ApiDatas}
          cart={cart}
          setCart={setCart}
          setPage={setPage}
          orderNamesInCart={orderNamesInCart}
          orders={orders}
          setOrders={setOrders}
          wholeOrderPrices={wholeOrderPrices}
          setWholeOrderPrices={setWholeOrderPrices}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          amountOfOrders={amountOfOrders}
          setAmountOfOrders={setAmountOfOrders}
        />
      );
    } else if (page === "Shopping List") {
      currentPage = (
        <BasketPage 
        cart={cart} 
        totalPrice={totalPrice}
        amountOfOrders={amountOfOrders}
        GoBack={GoBack} 
        RemoveFoodFromCart={RemoveFoodFromCart}
        addMore={addMore} 
        MinusOrder={MinusOrder}
        />
      );
    } else {
      currentPage = <div>Something went wrong</div>;
    }
  }

  return <div>{currentPage}</div>;
}

export default App;
