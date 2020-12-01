import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import FilteredList from "./FilteredList";

const usStatesList = [
  { name: "Arizona", numVotes: "11", color: "Swing", region: "West"},
  { name: "California", numVotes: "55", color: "Blue", region: "West"},
  { name: "Florida", numVotes: "29", color: "Swing", region: "South"},
  { name: "Idaho", numVotes: "4", color: "Red", region: "West"},
  { name: "Kansas", numVotes: "6", color: "Red", region: "Midwest"},
  { name: "Maryland", numVotes: "10", color: "Blue", region: "South"},
  { name: "Minnesota", numVotes: "10", color: "Swing", region: "Midwest"},
  { name: "Nebraska", numVotes: "5", color: "Red", region: "Midwest"},
  { name: "New York", numVotes: "29", color: "Blue", region: "Northeast"},
  { name: "Pennsylvania", numVotes: "20", color: "Swing", region: "Northeast"},
  { name: "Rhode Island", numVotes: "4", color: "Blue", region: "Northeast"},  
  { name: "Texas", numVotes: "38", color: "Red", region: "South"},
];

class App extends Component {

  constructor() {
    super();
    // const usStatesList = [
    //   { name: "Rhode Island", numVotes: "4", color: "blue", region: "Northeast"},
    //   { name: "Maryland", numVotes: "10", color: "blue", region: "South"},
    //   { name: "Idaho", numVotes: "4", color: "red", region: "West"},
    //   { name: "Florida", numVotes: "29", color: "swing", region: "South"},
    //   { name: "Texas", numVotes: "38", color: "red", region: "South"},
    //   { name: "California", numVotes: "55", color: "blue", region: "West"},
    //   { name: "New York", numVotes: "29", color: "blue", region: "Northeast"},
    //   { name: "Kansas", numVotes: "6", color: "red", region: "Midwest"},
    //   { name: "Nebraska", numVotes: "5", color: "red", region: "Midwest"},
    //   { name: "Arizona", numVotes: "11", color: "swing", region: "West"},
    //   { name: "Pennsylvania", numVotes: "20", color: "swing", region: "Northeast"},
    //   { name: "Minnesota", numVotes: "10", color: "swing", region: "Midwest"},
    // ];
    this.state = { 
    };
  }

  // addBox = event => {
  //   // // // event.preventDefault();
  //   // // // const newBox = ;
  //   // // // const boxNumber = [...this.state.boxArray, newBox];
  //   // this.setState({ boxNumber: this.state.boxNumber + 1 });
  //   const newBoxArray = [...this.state.boxArray, 1];
  //   console.log(this.state.boxArray);
  //   this.setState({boxArray: newBoxArray});
  // };

  // renderBoxes() {
  //   const newBoxArray = this.state.boxArray;
  //   const listBoxes = newBoxArray.map(n => <GreenBox />);
  //   return listBoxes;
  //   // console.log(this.state.boxNumber);
  //   // var boxes = [];
  //   // for(let i = 0; i < this.state.boxNumber; i++) {
  //   //   console.log(i);
  //   //   boxes.push(<GreenBox />);
  //   //   // return (<GreenBox />);
  //   // }
  //   // return boxes;   
  // }

  render() {
    return (
      <div>
        <FilteredList list={usStatesList} />
      </div>
    );
  }
}

export default App;
