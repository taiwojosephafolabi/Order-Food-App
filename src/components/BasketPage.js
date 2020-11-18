import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BasketItems from "./BasketItems";

const BasketPage = ({
  cart,
  GoBack,
  // addMore,
  // MinusOrder,
  RemoveFoodFromCart,
}) => {
  return (
    <div>
      <button className="basket_button" onClick={() => GoBack()}>
        Back
      </button>
      <div className="OrdersInfo">
      <p>TotalPrice : {}</p>
      <p>Amount of Orders : {}</p>
      </div>
      <div className="basketItemsContainer">
      {cart.map((chosenFood, index) => {
        return (
          <div  key={index}>
            <BasketItems
              chosenFood={chosenFood}
              index={index}
              RemoveFoodFromCart={RemoveFoodFromCart}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default BasketPage;
