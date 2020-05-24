import React from "react";

import products from "../../data/products";
import "./ProductsTable.css";

export default (props) => {
  function getProducts() {
    return products.map((t, i) => {
      return (
        <tr key={t.id} className={i % 2 === 0 ? "even" : "odd"}>
          <td>{t.id}</td>
          <td>{t.name}</td>
          <td> R$ {t.price.toFixed(2).replace(".",",")}</td>
        </tr>
      );
    });
  }
  return (
    <div className="ProductsTable">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{getProducts()}</tbody>
      </table>
    </div>
  );
};
