import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Welcome to Dog World!</h1>
      <BrowserRouter>
        <NavBar dogs={props.dogs} />
        <div>
          <RouteList dogs={props.dogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}



App.defaultProps = {
  "dogs": [
      {
        "name": "Whiskey",
        "age": 5,
        "src": "whiskey",
        "facts": [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        "name": "Duke",
        "age": 3,
        "src": "duke",
        "facts": [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        "name": "Perry",
        "age": 4,
        "src": "perry",
        "facts": [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      }
    ]
}



export default App;
