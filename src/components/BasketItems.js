import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BasketItems = ({
  chosenFood,
  index,
  RemoveFoodFromCart,
  changeOrders,
}) => {
  return (
    <div className="container">
      <div className="row col-3">
        <div className="basketPageContainer" key={index}>
          <div className="info-BasketContainer">
            <div className="orderedFoodDetails">
              <div className="removeOrder">
                <button
                  className="ml-2"
                  onClick={() => RemoveFoodFromCart(chosenFood)}
                >
                  X
                </button>
              </div>
              <div>
                <img
                  src={chosenFood.src}
                  alt="ordered food"
                  className="orderedImage"
                />
              </div>
              <div>
                <div className="order-info">
                  <p className="m-2">Name: {chosenFood.name}</p>
                  <p className="m-2">Price For one : {chosenFood.price}</p>
                  <p className="m-2">
                    Amount Of Orders : {chosenFood.quantity}{" "}
                  </p>
                  <p className="m-2">
                    Total Price: {chosenFood.price * chosenFood.quantity}
                  </p>
                </div>
                <div className="changeAmountOrders">
                  <button
                    className="OrderButton"
                    value={"add"}
                    onClick={(event) => changeOrders(chosenFood, event)}
                  >
                    +
                  </button>
                  <p className="my-2 amount">Amount:{chosenFood.quantity} </p>
                  <button
                    className="OrderButton"
                    value={"minus"}
                      onClick={(event) => changeOrders(chosenFood, event)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItems;
