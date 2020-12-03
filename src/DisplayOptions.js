import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DisplayOptions extends Component {

  constructor() {
    super();
  } 

  createNavItem = navName => {
    return (
      <Nav.Item>
        <Nav.Link eventKey={navName} onSelect={this.props.whenSelected}>{navName}</Nav.Link>
      </Nav.Item>
    )
  }

  render() {
    // var sortedList = this.props.list;
    const myNavs = this.props.navs.map(this.createNavItem);
    return (
      <Nav variant="tabs" defaultActiveKey={this.props.default}>
        {myNavs}
      </Nav>
    )
  }

}
  
export default DisplayOptions;