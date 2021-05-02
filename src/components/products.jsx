import React, { useContext } from "react";
import AppContext from "../context/app-context";
import { Col } from "react-bootstrap";
import { FaCartPlus, FaPlusSquare, FaMinusSquare } from "react-icons/fa";
const Product = () => {
  const { state, addProduct, removeProduct, updateState } = useContext(
    AppContext
  );
  const addItem = (data) => {
    const newItems = [...state.products];
    const index = state.products.findIndex((element) => element.id === data.id);
    newItems[index].incart = true;
    updateState(newItems);
    const newProduct = { ...data };
    const oldCart = state.cart_products;
    const newCart = [...oldCart];
    //Add Product to cart
    //Check if the product exist in cart
    if (newCart.findIndex((element) => element.id === newProduct.id) !== -1) {
      const cartIndex = oldCart.findIndex((element) => element.id === data.id);
      newCart[cartIndex].count++;
      newCart[cartIndex].totalPrice =
        oldCart[cartIndex].count * oldCart[cartIndex].price;
      addProduct(newCart);
    } else {
      newProduct.count = 1;
      newProduct.totalPrice = newProduct.price;
      newCart.push(newProduct);
      addProduct(newCart);
    }
  };
  //Remove Product from cart
  const removeItem = (data) => {
    const oldCart = state.cart_products;
    const newCart = [...oldCart];
    const cartIndex = oldCart.findIndex((element) => element.id === data.id);
    //Delete product from cart if only one product remain
    if (newCart[cartIndex].count === 1) {
      const updatedCart = newCart.filter((element) => element.id !== data.id);
      removeProduct(updatedCart);
      const newItems = [...state.products];
      const productIndex = newItems.findIndex(
        (element) => element.id === data.id
      );
      newItems[productIndex].incart = false;
      updateState(newItems);
    } else {
      newCart[cartIndex].count--;
      newCart[cartIndex].totalPrice =
        oldCart[cartIndex].count * oldCart[cartIndex].price;
      removeProduct(newCart);
    }
  };
  const handleProductButton = (data) => {
    if (
      state.cart_products.findIndex((element) => element.id === data.id) === -1
    ) {
      return (
        <button onClick={() => addItem(data)} title="Add To Cart">
          <FaCartPlus />
        </button>
      );
    } else {
      return (
        <div className="d-flex cart-button">
          <button>
            <FaMinusSquare onClick={() => removeItem(data)} />
          </button>
          <button onClick={() => addItem(data)} title="Add To Cart">
            <FaCartPlus />
          </button>
          <button onClick={() => addItem(data)}>
            <FaPlusSquare />
          </button>
        </div>
      );
    }
  };
  return (
    <React.Fragment>
      {state.products.map((element) => {
        return (
          <Col md={3} key={element.id}>
            <div className="product-card">
              <div
                className="product-card-img"
                style={{ backgroundImage: `url(${element.image})` }}
              ></div>
              <h2 className="text-center">{element.name}</h2>
              <div className="card-btn-price">
                <p>${element.price}</p>
                {handleProductButton(element)}
              </div>
            </div>
          </Col>
        );
      })}
    </React.Fragment>
  );
};
export default Product;
