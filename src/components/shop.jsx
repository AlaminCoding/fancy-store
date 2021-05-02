import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./products";
import PriceTable from "./price_table";
import CartBox from "./cart_box";
import AppContext from "../context/app-context";
const Shop = () => {
  const { state } = useContext(AppContext);

  const cartCol = () => {
    return state.cart_products.length ? 3 : 0;
  };
  const productCol = () => {
    return state.cart_products.length ? 9 : 12;
  };
  const handleStyle = () => {
    return state.cart_products.length ? "block" : "none";
  };
  return (
    <React.Fragment>
      <h2 className="text-center page-title">Shop</h2>
      <section className="shop-section container-fluid">
        <Row>
          <Col md={cartCol()} style={{ display: handleStyle() }}>
            <div className="mini-cart">
              <PriceTable />
              <div className="product-box">
                <CartBox />
              </div>
            </div>
          </Col>
          <Col md={productCol()}>
            <Row>
              <Product />
            </Row>
          </Col>
        </Row>
      </section>
    </React.Fragment>
  );
};

export default Shop;
