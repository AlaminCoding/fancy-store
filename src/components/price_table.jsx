import React, { useContext } from "react";
import AppContext from "../context/app-context";
const PriceTable = () => {
  const { state } = useContext(AppContext);
  let netPrice = 0;
  for (let i = 0; i < state.cart_products.length; i++) {
    netPrice = netPrice + state.cart_products[i].totalPrice;
  }
  return (
    <table className="total-price">
      <thead>
        <tr>
          <th>Number of items</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{state.cart_products.length}</td>
          <td>${netPrice}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;
