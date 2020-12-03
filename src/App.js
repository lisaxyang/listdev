import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredList from "./FilteredList";

const usStatesList = [
  { name: "Arizona", numVotes: "11", color: "Swing", region: "West", img: "https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/arizona.png?itok=_7XuZABk"},
  { name: "California", numVotes: "55", color: "Blue", region: "West", img: "https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/california.png?itok=eFjIL-5z"},
  { name: "Florida", numVotes: "29", color: "Swing", region: "South", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/florida.png?itok=Z_MbQpLf"},
  { name: "Idaho", numVotes: "4", color: "Red", region: "West", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/idaho.png?itok=9B3ERKlp"},
  { name: "Kansas", numVotes: "6", color: "Red", region: "Midwest", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/kansas.png?itok=mk_HAplm"},
  { name: "Maryland", numVotes: "10", color: "Blue", region: "South", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/maryland.png?itok=g72_z0VM"},
  { name: "Minnesota", numVotes: "10", color: "Swing", region: "Midwest", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/minnesota.png?itok=uCd1BFZ_"},
  { name: "Nebraska", numVotes: "5", color: "Red", region: "Midwest", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/nebraska.png?itok=EnyfHMCF"},
  { name: "New York", numVotes: "29", color: "Blue", region: "Northeast", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/new-york.png?itok=LSb42iu_"},
  { name: "Pennsylvania", numVotes: "20", color: "Swing", region: "Northeast", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/pennsylvania.png?itok=IUWfubCY"},
  { name: "Rhode Island", numVotes: "4", color: "Blue", region: "Northeast", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/rhode-island.png?itok=ics7c2HA"},  
  { name: "Texas", numVotes: "38", color: "Red", region: "South", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/texas_2.png?itok=aWgxT_y6"},
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
