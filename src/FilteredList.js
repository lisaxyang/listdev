import React, {Component} from 'react';

import { Nav } from 'react-bootstrap';
import DisplayList from "./DisplayList";

class FilteredList extends Component {

  constructor() {
    super();
    this.state = { 
      size: "All",
    };
  }

  onSelectFilterSize = event => {
    this.setState({
      size: event
    })
  };
  

  matchesFilterSize = item => {
    // all items should be shown when no filter is selected
    if(this.state.size === "All") { 
      return true;
    } else if (this.state.size === item.color) {
      return true;
    } else {
      return false;
    }
  }
  

  render() {
    return (
      // <div style={{width: "100px", height: "100px", backgroundColor: "#009d00"}}>
      //   It's a Green Box!
      // </div>
      // Contains filter and sort options
      <div>
        <Nav.Item>
          <Nav.Link eventKey="All" onSelect={this.onSelectFilterSize}>All</Nav.Link>
          <Nav.Link eventKey="Blue" onSelect={this.onSelectFilterSize}>Blue</Nav.Link>
          <Nav.Link eventKey="Red" onSelect={this.onSelectFilterSize}>Red</Nav.Link>
          <Nav.Link eventKey="Swing" onSelect={this.onSelectFilterSize}>Swing</Nav.Link>
        </Nav.Item>

        <DisplayList list={this.props.list.filter(this.matchesFilterSize)}/>
      </div>
    )
  }

}
  
export default FilteredList;