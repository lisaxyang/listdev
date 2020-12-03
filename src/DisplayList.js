import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DisplayList extends Component {

  constructor() {
    super();
  }

  createStateCard = stateUS => {
    return (
      // <Container fluid>
      //   <Row>
      //     <Col>
      //       <Card bg="light" style={{ width: '18rem' }}>
      //         <Card.Header><b>{stateUS.numVotes}</b> electoral votes</Card.Header>
      //         <Card.Body>
      //         <Card.Title>{stateUS.name}</Card.Title>
      //         <Card.Img variant="top" src={stateUS.img} />               
      //           <br></br><br></br>
      //           <ListGroup.Item>Political Leaning: {stateUS.color}</ListGroup.Item>
      //           <ListGroup.Item>Region: {stateUS.region} </ListGroup.Item>
      //           <br></br>
      //           <Button variant="info">Add to Vote Counter</Button>
      //         </Card.Body>
      //       </Card>
      //     </Col>
      //   </Row>
      // </Container>
      <Col>
        <Card bg="light" style={{ width: '18rem' }}>
          <Card.Header><b>{stateUS.numVotes}</b> electoral votes</Card.Header>
          <Card.Body>
          <Card.Title>{stateUS.name}</Card.Title>
          <Card.Img variant="top" src={stateUS.img} />               
            <br></br><br></br>
            <ListGroup.Item>Political Leaning: {stateUS.color}</ListGroup.Item>
            <ListGroup.Item>Region: {stateUS.region} </ListGroup.Item>
            <br></br>
            <Button variant="info">Add to Vote Counter</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };


  render() {
    const myList = this.props.list.map(this.createStateCard);


    return (
      <div>
        {/* <div>
          {this.props.list.map(item => 
            <li>{item.name}, {item.numVotes}, {item.color}, {item.region}</li> ) }
        </div> */}

        <Container fluid>
            <Row>{myList}</Row>
        </Container>

      </div>
    )
  }

}

export default DisplayList;