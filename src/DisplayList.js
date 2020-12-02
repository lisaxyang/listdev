import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

class DisplayList extends Component {

  constructor() {
    super();
  }

  createStateCard = item => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <Button variant="primary">Add to Vote Counter</Button>
        </Card.Body>
      </Card>
    );
  };


  render() {
    return (
      <div>
        <div>
          {this.props.list.map(item => 
            <li>{item.name}, {item.numVotes}, {item.color}, {item.region}</li> ) }
        </div>

        <div>
            
        </div>

      </div>
    )
  }

}

export default DisplayList;