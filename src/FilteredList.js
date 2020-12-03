import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DisplayList from "./DisplayList";
import DisplayAggregator from "./DisplayAggregator";
import Jumbotron from 'react-bootstrap/Jumbotron'

class FilteredList extends Component {

  constructor() {
    super();
    this.state = { 
      color: "All",
      region: "All",
      sortCondition: "None",
      votesToAdd: [],
      totalVotes: 0,
      numStates: 0,
      // sortedList: this.props.list,
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
        console.log("hello");
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
  };


  onSelectSort = event => {
    this.setState({
      sortCondition: event
    })
    // this.sortList();
  };


  // sortList = () => {
  //   if (this.state.sortCondition === "Ascending") {
  //     this.setState({
  //       sortedList: this.props.list.sort(function(a, b) {
  //         return a.numVotes - b.numVotes;
  //       })
  //     })
  //   } 
  //   else if (this.state.sortCondition === "Descending") {
  //     this.setState({
  //       sortedList: this.props.list.sort(function(a, b) {
  //         return b.numVotes - a.numVotes;
  //       })
  //     })
  //   }
  //   else {
  //     this.setState({
  //       sortedList: this.props.list,
  //     })
  //   }
  // };

  sortList = unsortedList => {
    if (this.state.sortCondition === "Ascending") {
      return unsortedList.sort(function(a, b) {
          return a.numVotes - b.numVotes;
        })
    } 
    else if (this.state.sortCondition === "Descending") {
      return unsortedList.sort(function(a, b) {
          return b.numVotes - a.numVotes;
        })
    }
    else {
      // console.log(this.state.sortCondition);
      return unsortedList.sort(function(a, b) {
          var stateA = a.name.toUpperCase(); // ignore upper and lowercase
          var stateB = b.name.toUpperCase(); // ignore upper and lowercase
          if (stateA < stateB) {
            return -1;
          }
          else if (stateA > stateB) {
            return 1;
          }
        
          // state names are the same
          return 0;
        })
    }
  };

  aggregatorFilter = item => {
    // all items should be shown when no filter is selected
    if(this.state.votesToAdd.includes(item.name)) {
      return true; 
    }
    else {
      return false;
    }
  };

  addMyState = (stateName, numVotes) => {
    if (this.state.votesToAdd.includes(stateName) === false) {
      const updatedVotesToAdd = [...this.state.votesToAdd, stateName];
      const newNumVotes = this.state.totalVotes + numVotes;
      this.setState({
        votesToAdd: updatedVotesToAdd,
        totalVotes: newNumVotes,
      });
      console.log(updatedVotesToAdd);
      console.log(newNumVotes);
      console.log(this.state.totalVotes);
      // console.log(event);
    }
    
  }

  removeMyState = (stateName, numVotes) => {
    if (this.state.votesToAdd.includes(stateName)) {
      const updatedVotesToAdd = this.state.votesToAdd.filter((item) => item !== stateName);
      const newNumVotes = this.state.totalVotes - numVotes;
      this.setState({
        votesToAdd: updatedVotesToAdd,
        totalVotes: newNumVotes,
      });
      console.log(updatedVotesToAdd);
      console.log(this.state.votesToAdd)
    }
  }

  // countVotesHelper = stateUS => {
  //   return stateUS.numVotes;
  // }

  // countVotes = () => {
  //   const aggregateMyStates = this.props.list.filter(this.aggregatorFilter).map(this.countVotesHelper);
  //   console.log(aggregateMyStates);
  //   const updatedVotes = this.state
  //   // let counter = 0;
  //   // for(let i = 0; i < this.state.numStates; i++) {
  //   //   counter = counter + {aggregateMyStates[i].numVotes}    
  //   // }

  // }
  
  // sortListHighestFirst = item => {
    
  // }
  
  // sortListLowestFirst = item => {
    
  // }

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
    // var sortedList = this.props.list;
    return (
      // <div style={{width: "100px", height: "100px", backgroundColor: "#009d00"}}>
      //   It's a Green Box!
      // </div>
      // Contains filter and sort options
      <div>
        <link rel="stylesheet" href="onlinebootstrap.css"></link>

        <Container fluid style={{backgroundColor: "grey"}}>

          <Row>
            <h1>US Electoral Vote Counter</h1>
          </Row>

          <Row>
            <Col md lg="8" style={{backgroundColor: "green"}}>
              

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
                  <Nav.Link eventKey="None" onSelect={this.onSelectSort}>Original</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="Descending" onSelect={this.onSelectSort}>Highest Votes First</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Ascending" onSelect={this.onSelectSort}>Lowest Votes First</Nav.Link>
                </Nav.Item>
              </Row>

              <Row>
              <DisplayList list={this.sortList(this.props.list).filter(this.matchesFilterColorRegion)}
                addMyState={this.addMyState} />
              </Row>
            </Col>
  
            <Col style={{backgroundColor: "yellow"}}>
              <Row>
                <h1>Vote Counter</h1>
              </Row>
              <Row>
              <DisplayAggregator list={this.props.list.filter(this.aggregatorFilter)}
                removeMyState={this.removeMyState} />
              </Row>
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