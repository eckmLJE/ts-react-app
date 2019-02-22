import React, { Component } from "react";
import "./App.css";
import * as _ from "lodash";

class App extends Component {
  
  fetchVenues = (venueString: string) => {
    console.log("fetchVenues reached");
    const url: string =
      "https://api.seatgeek.com/2/venues?client_id=MTU0NDI1OTd8MTU1MDg0OTY3NS4xOQ&per_page=100&q=";
    fetch(url + venueString)
      .then(res => res.json())
      .then(console.log);
  };

  handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.debounceInput(e.currentTarget.value);
  };

  debounceInput = _.debounce((searchString: string) => {
    this.fetchVenues(searchString);
  }, 500);

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleInput} />
      </div>
    );
  }
}

export default App;
