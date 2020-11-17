import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BasketItems from "./BasketItems";

const BasketPage = ({ cart, GoBack , addMore , MinusOrder , RemoveFoodFromCart ,totalPrice , amountOfOrders }) => {
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
