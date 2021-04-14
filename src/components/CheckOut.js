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
      <div>
      <img src="https://www.apple.com/v/apple-pay/i/images/overview/og_image.png?202008250327" alt="food"  />
      <p className="checkout">🎉Your transaction has been successfully completed🎉</p>
      </div>
    </div>
  );
};

export default Checkout;
