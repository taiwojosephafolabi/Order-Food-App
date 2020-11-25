import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Checkout = ({GoToShoppingLists}) => {
  return (
    <div className="container">
      <div>
        <button className="basket_button" onClick={() => GoToShoppingLists()}>
          Back
        </button>
      </div>
      <div className="row">
      you are in!
      </div>
    </div>
  );
};

export default Checkout;
