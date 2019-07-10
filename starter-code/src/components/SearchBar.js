import React, { Component } from "react";
import style from "./style.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-layout" style={style}>
        <div>
          <p>Search</p>
        </div>
        <div className="search">
          <input
            type="text"
            className="search"
            value={this.props.name}
            onChange={evt => this.props.onChange(evt)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            value={this.props.click}
            onClick={evt => this.props.onClick(evt)}
          />
          Only show products in stock
        </div>
      </div>
    );
  }
}

export default SearchBar;
