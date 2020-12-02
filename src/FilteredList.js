import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DisplayList from "./DisplayList";

class FilteredList extends Component {

  constructor() {
    super();
    this.state = { 
      color: "All",
      region: "All",
      sortCondition: "None",
    };
  }

  onSelectFilterColor = event => {
    this.setState({
      color: event
    })
  };

  onSelectFilterRegion = event => {
    this.setState({
      region: event
    })
  }; 

  matchesFilterColorRegion = item => {
    // all items should be shown when no filter is selected
    if(this.state.color === "All") { 
      if(this.state.region === "All") { 
        return true;
      } else if (this.state.region === item.region) {
        return true;
      } else {
        return false;
      }
      return true;
    } else if (this.state.color === item.color) {
      if(this.state.region === "All") { 
        return true;
      } else if (this.state.region === item.region) {
        return true;
      } else {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }


  onSelectSort = event => {
    this.setState({
      sortCondition: event
    })
  }


  sortList = item => {

  }
  
  sortListHighestFirst = item => {
    
  }
  
  sortListLowestFirst = item => {
    
  }

  // matchesFilterRegion = item => {
  //   // all items should be shown when no filter is selected
  //   if(this.state.region === "All") { 
  //     return true;
  //   } else if (this.state.region === item.region) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  

  render() {
    return (
      // <div style={{width: "100px", height: "100px", backgroundColor: "#009d00"}}>
      //   It's a Green Box!
      // </div>
      // Contains filter and sort options
      <div>
        <link rel="stylesheet" href="onlinebootstrap.css"></link>
        <Container fluid style={{backgroundColor: "grey"}}>
          <Row>
            <Col md lg="7" style={{backgroundColor: "green"}}>
              <Row style={{backgroundColor: "pink"}}>
                <Nav.Item>
                  <Nav.Link eventKey="All" onSelect={this.onSelectFilterColor}>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="Blue" onSelect={this.onSelectFilterColor}>Blue</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Red" onSelect={this.onSelectFilterColor}>Red</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Swing" onSelect={this.onSelectFilterColor}>Swing</Nav.Link>
                </Nav.Item>
              </Row>
              {/* <Row style={{backgroundColor: "pink"}}>
                <Nav.Item>
                  <Nav.Link eventKey="All" onSelect={this.onSelectFilterColor}>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="Midwest" onSelect={this.onSelectFilterColor}>Midwest</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Northeast" onSelect={this.onSelectFilterColor}>Northeast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="South" onSelect={this.onSelectFilterColor}>South</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="West" onSelect={this.onSelectFilterColor}>West</Nav.Link>
                </Nav.Item>
              </Row> */}
      
              <Row style={{backgroundColor: "pink"}}>
                <Nav.Item>
                  <Nav.Link eventKey="All" onSelect={this.onSelectFilterRegion}>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="Midwest" onSelect={this.onSelectFilterRegion}>Midwest</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Northeast" onSelect={this.onSelectFilterRegion}>Northeast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="South" onSelect={this.onSelectFilterRegion}>South</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="West" onSelect={this.onSelectFilterRegion}>West</Nav.Link>
                </Nav.Item>
              </Row>

              <Row style={{backgroundColor: "honeydew"}}>
                <Nav.Item>
                  <Nav.Link eventKey="None" onSelect={this.onSelectSort}>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="Highest" onSelect={this.onSelectSort}>Highest Votes First</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Lowest" onSelect={this.onSelectSort}>Lowest Votes First</Nav.Link>
                </Nav.Item>
              </Row>

              <Row>
                <DisplayList list={this.props.list.filter(this.matchesFilterColorRegion)}/>
              </Row>
            </Col>
  
            <Col style={{backgroundColor: "yellow"}}>
              <p>Aggregator here</p>
            </Col>
  
            {/* <Col style={{backgroundColor: "purple"}}>
              <p>hello</p>
            </Col>
  
            <Col style={{backgroundColor: "lavender"}}>
              <p>sad</p>
            </Col> */} 
          </Row>

        </Container>
      </div>
    )
  }

}
  
export default FilteredList;