import React, { Component } from "react";
import style from "./style.css";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  state = {};
  render() {
    return (
      <div className="div-table" style={style}>
        <table className="table" style={style}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((one, index) => {
              if (
                one.name
                  .toLowerCase()
                  .includes(this.props.stringSearch.toLowerCase())
              )
                return (
                  <ProductRow
                    key={index}
                    name={one.name}
                    price={one.price}
                    stocked={one.stocked}
                    checkbox={this.props.checkbox}
                  />
                );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
