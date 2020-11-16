import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const MenuTemplate = ({
  SameTypeData,
  setSelectedFood,
  setBasket,
  selectedFood,
}) => {
 
  let basketItems = [];

  const updatePage = (item) => {
    if(selectedFood !== null ){
    // setSelectedFood([...selectedFood,{...item}]);
    basketItems.push(item);
    setBasket(true);
  }
    else{
    setSelectedFood(item);
    setBasket(true);
      }
  };
  return (
    <div className="container">
      <div className="row">
        {SameTypeData.map((item) => {
          return (
            <div className="card">
              <img
                className="card-img-top"
                src={item.src}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text item_description">{item.description}</p>
                <div className="order_card_container">
                  <span className="price_card">Price : £{item.price}</span>
                  <button
                    className="btn_card"
                    onClick={(event) => updatePage(item)}
                  >
                    order
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTemplate;
