import React, {Component} from 'react'


class FilteredList extends Component {

    constructor() {
        super();
        this.state = { 
            size: "All",
        };
      }


    render() {
        return (
            <div style={{width: "100px", height: "100px", backgroundColor: "#009d00"}}>
                It's a Green Box!
            </div>
        )
    }
}
  
export default FilteredList