import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import BasketItems from "./BasketItems";

const BasketPage = ({ cart, GoBack, RemoveFoodFromCart , addMoreOrders , amountOfOrder , reduceOrders}) => {
  let sameOrdersByName = cart.map((food) => food.name);
  let orderNamesInCart = sameOrdersByName.filter(
    (foodname, index, newCart) => newCart.indexOf(foodname) === index
  );
  let TotalPriceOfOrders = cart
    .map((food) => (food.price) * (food.quantity))
    .reduce((previous, current) => {
      return previous + current;
    });

  return (
    <div>
      <button className="basket_button" onClick={() => GoBack()}>
        Back
      </button>
      <div className="OrdersInfo">
        <p>Total Price: £{TotalPriceOfOrders}</p>
        <p className="nameOfOrders ml-auto mr-auto">
          {orderNamesInCart.map((order) => (
            <p className="mx-1"> {order}-</p>
          ))}
        </p>
      </div>
      <div className="basketItemsContainer">
        {cart.map((chosenFood, index) => {
          return (
            <div key={chosenFood.id}>
              <BasketItems
                chosenFood={chosenFood}
                index={index}
                RemoveFoodFromCart={RemoveFoodFromCart}
                addMoreOrders={addMoreOrders}
                amountOfOrder={amountOfOrder}
                reduceOrders={reduceOrders}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BasketPage;
