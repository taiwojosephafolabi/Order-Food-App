import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BasketItems = ({ chosenFood, index, RemoveFoodFromCart , addMoreOrders , amountOfOrder , reduceOrders}) => {
  return (
    <div className="basketPageContainer" key={index}>
      <div className="info-BasketContainer">
        <div className="orderedFoodDetails">
          <div>
            <img
              src={chosenFood.src}
              alt="ordered food"
              className="orderedImage"
            />
            <button
              className="ml-2 mt-2"
              onClick={() => RemoveFoodFromCart(chosenFood)}
            >
              Cancel
            </button>
          </div>
          <div className="">
            <p className="m-2">Name: {chosenFood.name}</p>
            <p className="m-2">Price For one : {chosenFood.price}</p>
            <p className="m-2">Amount Of Orders : {chosenFood.quantity} </p>
            <p className="m-2">Total Price: {chosenFood.price * chosenFood.quantity}</p>
          </div>
          <div className="m-2 d-flex">
            <button className="mr-2 p-1" onClick ={(event) => addMoreOrders(chosenFood)} > + </button>
            <p className="my-2">Amount:{chosenFood.quantity} </p>
            <button className="mr-2 p-1 ml-2" onClick={(event => reduceOrders(chosenFood))}> - </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItems;
