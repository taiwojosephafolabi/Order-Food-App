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
      <img src="https://lh3.googleusercontent.com/proxy/JdMHzjmBs4n9xswcihfbEDgfBoh5GJSLqM7moH3pO7Kh1Y7NZ1shPvosR2n6W-keRIZZ9HfXm3ztOH8wsaUnoFzQZVKvnhlbEf2fhyuids31QuhpUexFHdledaX6xs-egDqG2YHuQlnjo2DrKq8LBMvHEA" alt="food"  />
      <p className="checkout">🎉Your transaction has been successfully completed🎉</p>
      </div>
    </div>
  );
};

export default Checkout;
