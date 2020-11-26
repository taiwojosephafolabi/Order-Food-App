import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import BasketItems from "./BasketItems";

const BasketPage = ({
  cart,
  backToMenu,
  RemoveFoodFromCart,
  changeOrders,
  GoCheckOut,
}) => {
  let sameOrdersByName = cart.map((food) => food.name);
  let orderNamesInCart = sameOrdersByName.filter(
    (foodname, index, newCart) => newCart.indexOf(foodname) === index
  );
  let TotalPriceOfOrders = cart
    .map((food) => food.price * food.quantity)
    .reduce((previous, current) => {
      return previous + current;
    }, 0);

  return (
    <div>
      <div className="basketPageButtonContainer">
        <button className="basket_button" onClick={() => backToMenu()}>
          Back
        </button>
        <div className="ml-auto">
          <button
            className="basket_button payButton"
            onClick={() => GoCheckOut()}
          >
            Pay
          </button>
        </div>
      </div>
      <div className="OrdersInfo">
        <p className="nameOfOrders ml-auto mr-auto">
          <p>Your Orders :</p>
          {orderNamesInCart.map((order) => (
            <p className="mx-1">
              {order}
              {"  -  "}
            </p>
          ))}
        </p>
        <p className="mb-5">Total Price: £{TotalPriceOfOrders}</p>
      </div>
      <div className="basketItemsContainer">
        {cart.map((chosenFood, index) => {
          return (
            <div key={chosenFood.id}>
              <BasketItems
                chosenFood={chosenFood}
                index={index}
                RemoveFoodFromCart={RemoveFoodFromCart}
                changeOrders={changeOrders}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BasketPage;
