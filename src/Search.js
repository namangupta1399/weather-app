import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div id="searchContainer">
        <div className="input-group">
          <input
            className={`form-control ${this.props.error ? 'is-invalid' : ''}`}
            type="text"
            placeholder="Enter your city here"
            value={this.props.searchValue}
            onChange={this.props.handleChange}
            name="searchText"
          />
          <div className="input-group-append" id="button-addon4">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.onSearchSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.props.getCurrentLocation}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </button>
          </div>
        </div>
        {this.props.error ? (
          <p className="text-danger">{this.props.error}</p>
        ) : null}
      </div>
    );
  }
}

export default Search;
