import React, {Component} from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DisplayList from "./DisplayList";
import DisplayAggregator from "./DisplayAggregator";
import DisplayOptions from "./DisplayOptions";
import "./style.css"

class FilteredList extends Component {

  constructor() {
    super();
    this.state = { 
      color: "All", //political leaning
      region: "All",
      sortCondition: "Original", //originally alphabetical
      votesToAdd: [], // lists of US States to add to aggregator
      totalVotes: 0, // total number of electoral votes in aggregator
    };
  }

  // Sets the filter option for political leaning
  onSelectFilterColor = event => {
    this.setState({
      color: event
    })
  };

  // Sets the filter option for region
  onSelectFilterRegion = event => {
    this.setState({
      region: event
    })
  }; 

  // Filter function for the list of US States
  matchesFilterColorRegion = item => {
    // all items should be shown when no filter is selected

    // Checks political leaning first
    if(this.state.color === "All") { 
      // Then checks region
      if(this.state.region === "All") { 
        return true;
      } else if (this.state.region === item.region) {
        return true;
      } else {
        return false;
      }
    } 
    // Specific political leaning
    else if (this.state.color === item.color) {
      if(this.state.region === "All") { 
        return true;
      } else if (this.state.region === item.region) {
        return true;
      } else {
        return false;
      }
    } 
    // Incorrect political leaning
    else {
      return false;
    }
  };

  // Sets sort option for list
  onSelectSort = event => {
    this.setState({
      sortCondition: event
    })
  };

  // Sorts list depending on the sort option selected, in state
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
    // Original ordering
    else {
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

  // Mapping function to add US State to aggregator iff it is not already there
  aggregatorFilter = item => {
    // all items should be shown when no filter is selected
    if(this.state.votesToAdd.includes(item.name)) {
      return true; 
    }
    else {
      return false;
    }
  };

  // Function to logically add US State to aggregator and this.state
  // if user clicks the button
  addMyState = (stateName, numVotes) => {
    if (this.state.votesToAdd.includes(stateName) === false) {
      const updatedVotesToAdd = [...this.state.votesToAdd, stateName];
      const newNumVotes = this.state.totalVotes + numVotes;
      this.setState({
        // Updates state with list of US State names in aggregator
        // and number of aggregate votes
        votesToAdd: updatedVotesToAdd,
        totalVotes: newNumVotes,
      });
    }
    
  }

  // Function to logically remove US State from aggregator and this.state
  // if user clicks the button
  removeMyState = (stateName, numVotes) => {
    if (this.state.votesToAdd.includes(stateName)) {
      const updatedVotesToAdd = this.state.votesToAdd.filter((item) => item !== stateName);
      const newNumVotes = this.state.totalVotes - numVotes;
      // Updates state with list of US State names in aggregator
      // and number of aggregate votes
      this.setState({
        votesToAdd: updatedVotesToAdd,
        totalVotes: newNumVotes,
      });
    }
  }
  

  render() {
    return (

      // Bootstrap fluid container
      <Container fluid style={{backgroundColor: "grey"}}>
        
        {/* Title */}
        <Row>
          <h1>US Electoral Vote Counter</h1>
        </Row>

        {/* Displayed list and aggregator section*/}
        <Row>

          {/* Displayed list column */}
          <Col md lg="8" style={{backgroundColor: "green"}}>

            {/* Filter and Sort options */}
            <Row style={{backgroundColor: "grey"}}>
              <DisplayOptions navs={["All", "Blue", "Red", "Swing"]}
                whenSelected={this.onSelectFilterColor} 
                default="All"/>
            </Row>

            <Row style={{backgroundColor: "grey"}}>
              <DisplayOptions navs={["All", "Midwest", "Northeast", "South", "West"]}
                whenSelected={this.onSelectFilterRegion} 
                default="All"/>
            </Row>

            <Row style={{backgroundColor: "grey"}}>
              <DisplayOptions navs={["Original", "Descending", "Ascending"]}
                whenSelected={this.onSelectSort} 
                default="Original"/>
            </Row>
          
            {/* Displayed list */}
            <Row>
            <DisplayList list={this.sortList(this.props.list).filter(this.matchesFilterColorRegion)}
              addMyState={this.addMyState} />
            </Row>
            
          </Col>

          {/* Aggregator column */}
          <Col style={{backgroundColor: "yellow"}}>
            {/* Section title and aggregate votes */}
            <Row>
              <h1>Vote Counter</h1>
              <h3>You have <b style={{color: "green"}}>{this.state.totalVotes}</b> electoral votes</h3>
            </Row>
            {/* Aggregate List */}
            <Row>
            <DisplayAggregator list={this.props.list.filter(this.aggregatorFilter)}
              removeMyState={this.removeMyState} />
            </Row>
          </Col>

        </Row>

      </Container>
    )
  }

}
  
export default FilteredList;