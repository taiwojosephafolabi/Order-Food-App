import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BasketPage = ({
  selectedFood,
  AddOrder,
  CancelOrder,
  MinusOrder,
  GoBack,
  orderPrices,
  orders,
}) => {
  let prices;
  if (orderPrices === null) {
    prices = selectedFood.price;
  } else {
    prices = orderPrices;
  }
  return (
    <div className="basketPageContainer">
      <div className="info-BasketContainer">
        <div>
          <img src={selectedFood.src} alt="ordered food" className="img" />
          <p>{orders}</p>
          <p>£ {prices}</p>
        </div>
        <div className="basketButtonOrders">
          <button className="basket_button" onClick={() => GoBack()}>
            Back
          </button>
          <button className="basket_button" onClick={() => AddOrder()}>
            ++
          </button>
          <button className="basket_button" onClick={() => MinusOrder()}>
            --
          </button>
          <button className="basket_button" onClick={() => CancelOrder()}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
