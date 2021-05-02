import React, { useContext } from "react";
import AppContext from "../context/app-context";
import {
  BsFillDashSquareFill,
  BsFillPlusSquareFill,
  BsFillXCircleFill,
} from "react-icons/bs";
const CartBox = () => {
  const {
    state,
    updateState,
    increaseProduct,
    decreaseProduct,
    deleteProduct,
  } = useContext(AppContext);
  //Increase item from cart
  const increaseItem = (data) => {
    const oldCart = state.cart_products;
    const newCart = [...oldCart];
    const cartIndex = newCart.findIndex((element) => element === data);
    newCart[cartIndex].count++;
    newCart[cartIndex].totalPrice =
      newCart[cartIndex].count * newCart[cartIndex].price;
    increaseProduct(newCart);
  };
  //Decrease item from cart
  const decreaseItem = (data) => {
    const oldCart = state.cart_products;
    const newCart = [...oldCart];
    const cartIndex = newCart.findIndex((element) => element === data);
    newCart[cartIndex].count--;
    newCart[cartIndex].totalPrice =
      newCart[cartIndex].count * newCart[cartIndex].price;
    decreaseProduct(newCart);
  };
  //Delete item from cart
  const deletItem = (data) => {
    const oldCart = [...state.cart_products];
    const updatedCart = oldCart.filter((element) => element.id !== data.id);
    deleteProduct(updatedCart);
    const oldState = [...state.products];
    const itemIndex = oldState.findIndex((element) => element.id === data.id);
    oldState[itemIndex].incart = false;
    updateState(oldState);
  };
  return (
    <React.Fragment>
      {state.cart_products.map((element) => {
        return (
          <div className="cart-box" key={element.id}>
            <div className="cart-box-img">
              <div>
                <BsFillPlusSquareFill onClick={() => increaseItem(element)} />
                {element.count > 1 ? (
                  <BsFillDashSquareFill onClick={() => decreaseItem(element)} />
                ) : null}
              </div>
              <img src={element.image} alt="Product er chobi" />
            </div>
            <p>
              {element.count} x ${element.price}
            </p>
            <h2>${element.totalPrice}</h2>
            <BsFillXCircleFill onClick={() => deletItem(element)} />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default CartBox;
