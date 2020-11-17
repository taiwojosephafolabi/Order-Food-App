import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BasketItems = ({
  chosenFood,
  index,
  RemoveFoodFromCart,
  addMore,
  MinusOrder,
}) => {
  return (
    <div className="basketPageContainer" key={index}>
      <div className="info-BasketContainer">
        <div>
          <img src={chosenFood.src} alt="ordered food" className="img" />
          <p>{chosenFood.name}</p>
          <p>{chosenFood.price}</p>
        </div>
        <div className="basketButtonOrders">
          <button onClick={() => RemoveFoodFromCart(chosenFood)}>Remove</button>
          <button onClick={() => addMore(chosenFood)}> Add </button>
          <button onClick={() => MinusOrder(chosenFood)}> Less </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItems;
