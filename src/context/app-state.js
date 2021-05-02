import React, { useReducer } from "react";
import AppContext from "./app-context";
import AppReducer from "./app-reducer";
import Products from "../all_product";
const AppState = (props) => {
  const initState = {
    products: Products,
    cart_products: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initState);

  const updateState = (data) => {
    dispatch({
      type: "UPDATE_STATE",
      payload: data,
    });
  };
  const addProduct = (data) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: data,
    });
  };
  const removeProduct = (data) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: data,
    });
  };
  const increaseProduct = (data) => {
    dispatch({
      type: "INCREASE_PRODUCT",
      payload: data,
    });
  };
  const decreaseProduct = (data) => {
    dispatch({
      type: "DECREASE_PRODUCT",
      payload: data,
    });
  };
  const deleteProduct = (data) => {
    dispatch({
      type: "DELETE_CART",
      payload: data,
    });
  };
  console.log(state.cart_products);
  return (
    <AppContext.Provider
      value={{
        state,
        addProduct,
        removeProduct,
        updateState,
        increaseProduct,
        decreaseProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
