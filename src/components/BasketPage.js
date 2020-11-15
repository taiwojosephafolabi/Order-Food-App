import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BasketPage = ({
  selectedFood,
  AddOrder,
  CancelOrder,
  MinusOrder,
  orderPrices,
  orders,
}) => {
  return (
    <div className="basketPageContainer">
      <div className="info-BasketContainer">
        <div>
          <img src= {selectedFood.src} alt="ordered food" className="img" />
          <p>{orders}</p>
          <p>£ {orderPrices}</p>
        </div>
        <div className="basketButtonOrders">
          <button className="basket_button" onClick={AddOrder}>
            ++
          </button>
          <button className="basket_button" onClick={MinusOrder}>
            --
          </button>
          <button className="basket_button" onClick={CancelOrder}>
            cancel
          </button>
          {/* <button className="basket_button" onClick={setBack(false)}>
            Back
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
