import React  from "react";
import "bootstrap/dist/css/bootstrap.css";
import BasketItems from "./BasketItems";

const BasketPage = ({
  cart,
  GoBack,
  RemoveFoodFromCart,

}) => {

  let sameOrdersByName = cart.map((food) => food.name);
  let orderNamesInCart = sameOrdersByName.filter((foodname, index, newCart) => newCart.indexOf(foodname) === index);
     // ["ham","juice","pizaa"]        [{"pizza"},{"pizaa"},{"juice"}]
  let amountOfEachOrder = cart.map(eachOrder => orderNamesInCart.map(eachFood => eachFood === eachOrder.name))
  let TotalPriceOfOrders = cart.map(food => (food.price)).reduce((previous,current) => {return(previous + current)})
  

  return (
    <div>
      <button className="basket_button" onClick={() => GoBack()}>
        Back
      </button>
      <div className="OrdersInfo">
      <p>Total Price: £{TotalPriceOfOrders}</p>
      <p>Amount Of Orders : {cart.length}</p>
      <p className="nameOfOrders ml-auto mr-auto">Orders: {orderNamesInCart.map(order => <p className="mx-1"> {order}-</p>)}</p>

      </div>
      <div className="basketItemsContainer">
      {cart.map((chosenFood, index) => {
        return (
          <div  key={index}>
            <BasketItems
              chosenFood={chosenFood}
              index={index}
              RemoveFoodFromCart={RemoveFoodFromCart}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default BasketPage;
