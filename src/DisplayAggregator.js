import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DisplayAggregator extends Component {

  constructor() {
    super();
  }

  // Creates a card for each US state for the aggregator
  createStateCardCount = stateUS => {
    return (
      // Returns each card in a column so it can be flex-wrapped
      <Col key={stateUS.name}>
        <Card bg="light" style={{ width: '17rem', margin: '1rem 1rem 1rem 1rem' }}>
          <Card.Header><b>{stateUS.numVotes}</b> electoral votes</Card.Header>
          <Card.Body>
          <Card.Title>{stateUS.name}</Card.Title>
          <Card.Img variant="top" src={stateUS.img} alt={stateUS.name} />               
            <br></br><br></br>
            <ListGroup.Item>Political Leaning: {stateUS.color}</ListGroup.Item>
            <ListGroup.Item>Region: {stateUS.region} </ListGroup.Item>
            <br></br>
            {/* passes in two parameters to the onClick function when button is clicked */}
            <Button variant="danger" onClick={() => this.props.removeMyState(stateUS.name, stateUS.numVotes)}>Remove from Vote Counter</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };


  render() {
    // Creates a card for each US state using map function
    const myList = this.props.list.map(this.createStateCardCount);
    return (
      // Returns a flexbox container for the US State cards
      <Container fluid>
        <Row style={{alignItems: "center"}}>
          {myList}
        </Row>
      </Container>
    )
  }

}

export default DisplayAggregator;