import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav'

class DisplayOptions extends Component {

  constructor() {
    super();
  } 

  // Creates a nav item for each filter/sort option
  createNavItem = navName => {
    return (
      <Nav.Item>
        {/* sets the eventKey as the nav descriptor and onSelect function as passed in function */}
        <Nav.Link eventKey={navName} onSelect={this.props.whenSelected}>{navName}</Nav.Link>
      </Nav.Item>
    )
  }

  render() {
    // Creates nav item for each filter/sort option
    const myNavs = this.props.navs.map(this.createNavItem);
    // Returns all the nav items wrapped in tabbed nav format
    return (
      <Nav variant="pills info" defaultActiveKey={this.props.default}>
        {myNavs}
      </Nav>
    )
  }

}
  
export default DisplayOptions;