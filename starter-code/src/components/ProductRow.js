import React, { Component } from "react";
import style from "./style.css";
import products from "../data.json";

// const list = { products };

class ProductRow extends Component {
  notToBeDisplayed() {
    return this.props.checkbox && !this.props.stocked;
  }

  render() {
    return this.notToBeDisplayed() ? null : (
      <tr style={style}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
