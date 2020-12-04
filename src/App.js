import logo from './logo.svg';
import './App.css';

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredList from "./FilteredList";

// List of 12 US States with votes, political leaning, region, and image
const usStatesList = [
  { name: "Arizona", numVotes: 11, color: "Swing", region: "West", img: "https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/arizona.png?itok=_7XuZABk"},
  { name: "California", numVotes: 55, color: "Blue", region: "West", img: "https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/california.png?itok=eFjIL-5z"},
  { name: "Florida", numVotes: 29, color: "Swing", region: "South", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/florida.png?itok=Z_MbQpLf"},
  { name: "Idaho", numVotes: 4, color: "Red", region: "West", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/idaho.png?itok=9B3ERKlp"},
  { name: "Kansas", numVotes: 6, color: "Red", region: "Midwest", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/kansas.png?itok=mk_HAplm"},
  { name: "Maryland", numVotes: 10, color: "Blue", region: "South", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/maryland.png?itok=g72_z0VM"},
  { name: "Minnesota", numVotes: 10, color: "Swing", region: "Midwest", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/minnesota.png?itok=uCd1BFZ_"},
  { name: "Nebraska", numVotes: 5, color: "Red", region: "Midwest", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/nebraska.png?itok=EnyfHMCF"},
  { name: "New York", numVotes: 29, color: "Blue", region: "Northeast", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/new-york.png?itok=LSb42iu_"},
  { name: "Pennsylvania", numVotes: 20, color: "Swing", region: "Northeast", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/pennsylvania.png?itok=IUWfubCY"},
  { name: "Rhode Island", numVotes: 4, color: "Blue", region: "Northeast", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/rhode-island.png?itok=ics7c2HA"},  
  { name: "Texas", numVotes: 38, color: "Red", region: "South", img:"https://www.colorincolorado.org/sites/default/files/styles/resource_thumbnail/public/texas_2.png?itok=aWgxT_y6"},
];

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      // Passes in the list of US States
      <FilteredList list={usStatesList} />
    );
  }
}

export default App;
