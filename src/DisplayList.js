import React, {Component} from 'react';

class DisplayList extends Component {

  constructor() {
    super();
  }


  render() {
    return (
      <div>
        {this.props.list.map(item => 
          <li>{item.name}, {item.numVotes}, {item.color}, {item.region}</li> ) }
      </div>
    )
  }

}

export default DisplayList;