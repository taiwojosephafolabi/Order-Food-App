import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BasketItems from "./BasketItems";

const BasketPage = ({ cart, setCart, GoBack }) => {
  const [wholeOrderPrices, setWholeOrderPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [amountOfOrders, setAmountOfOrders] = useState(0);
  const [orders, setOrders] = useState(0);

  if (cart.length !== 0) {
    // [0,1,10,12] = wholeprices
    setWholeOrderPrices(cart.map(food => food.price));
    // [0,1,10,12] = wholeprices
    let sumOfOrdersPrices = wholeOrderPrices.reduce(function (a, b) {  
      return Number(a) + Number(b);
    }, 0);
    setTotalPrice(sumOfOrdersPrices);
    setAmountOfOrders(cart.length);
    console.log("wholeOrderPrices",wholeOrderPrices);
    console.log("totalPrice",totalPrice);
    console.log("amountOfOrders",amountOfOrders);
    console.log("orders",orders);
  } 


  const RemoveFoodFromCart = (foodToRemove) => {
    let newShoppingList = cart.filter(food => food !== foodToRemove);
    setTotalPrice(totalPrice - foodToRemove.price);
    setAmountOfOrders(amountOfOrders - 1);
    setCart(newShoppingList);
  };

  const addMore = (food) => {
    setOrders(orders + 1);
    setTotalPrice(totalPrice + (food.price * orders));
    setAmountOfOrders(amountOfOrders + orders);
  };

  const MinusOrder = (food) => {
    if(orders - 1 > 0){
    setOrders(orders - 1);
    setTotalPrice(totalPrice - (food.price * orders));
    setAmountOfOrders(amountOfOrders - orders);
    }
    else{
    return 
    }
  };

  return (
    <div>
      <button className="basket_button" onClick={() => GoBack()}>
        Back
      </button>
      <p>TotalPrice : {totalPrice}</p>
      <p>Orders : {amountOfOrders}</p>
      {cart.map((chosenFood, index) => {
        return (
          <div key={index}>
            <BasketItems
              cart={cart}
              chosenFood={chosenFood}
              index={index}
              RemoveFoodFromCart={RemoveFoodFromCart}
              MinusOrder={MinusOrder}
              addMore={addMore}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BasketPage;
