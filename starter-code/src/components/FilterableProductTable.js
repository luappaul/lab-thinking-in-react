import React, { Component } from "react";
import SearcBar from "./SearchBar";
import style from "./style.css";
import ProductTable from "./ProductTable";
import data from "../data.json";

class FilterableProductTable extends Component {
  state = {
    products: data.data,
    name: "",
    click: false
  };

  handleTitle = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleCheck = event => {
    this.setState({
      click: !this.state.click
    });
  };

  render() {
    return (
      <div className="main-layout" style={style}>
        <h1>IronStore</h1>
        <SearcBar onChange={this.handleTitle} onClick={this.handleCheck} />
        <ProductTable
          products={this.state.products}
          stringSearch={this.state.name}
          checkbox={this.state.click}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
