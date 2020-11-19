import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BasketItems = ({
  chosenFood,
  index,
  RemoveFoodFromCart,
  quantity
}) => {
  return (
    <div className="basketPageContainer" key={index}>
      <div className="info-BasketContainer">
        <div className="orderedFoodDetails">
          <div>
          <img src={chosenFood.src} alt="ordered food" className="orderedImage" />
          <button className="ml-2 mt-2" onClick={() => RemoveFoodFromCart(chosenFood)}>Cancel</button>
          </div>
          <div className="">
          <p className="m-2">Name: {chosenFood.name}</p>
          <p className="m-2">Price: {chosenFood.price}</p>
          <p className="m-2">Amount: {chosenFood.quantity} </p>
          </div>
          <div className="m-2 d-flex">
          <button className="mr-2 p-1" > + </button>
          <p className="my-2">Amount: {quantity} </p>
          {/* onClick={() => addMore(chosenFood)} */}
          <button className="mr-2 p-1 ml-2"> - </button>
          {/* onClick={() => MinusOrder(chosenFood)} */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default BasketItems;
