import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    const usStates = [
      { name: "Rhode Island", numVotes: "4", color: "blue", region: ""},
      { name: "Maryland", numVotes: "10", color: "blue", region: ""},
      { name: "Idaho", numVotes: "4", color: "red", region: ""},
      { name: "Florida", numVotes: "29", color: "swing", region: ""},
      { name: "Texas", numVotes: "38", color: "red", region: ""},
      { name: "California", numVotes: "55", color: "blue", region: ""},
      { name: "New York", numVotes: "29", color: "blue", region: ""},
      { name: "Kansas", numVotes: "6", color: "red", region: ""},
      { name: "Nebraska", numVotes: "5", color: "red", region: ""},
      { name: "Arizona", numVotes: "11", color: "swing", region: ""},
      { name: "Pennsylvania", numVotes: "20", color: "swing", region: ""},
      { name: "Minnesota", numVotes: "10", color: "swing", region: ""},
    ];
    this.state = { 
    };
  }

  addBox = event => {
    
    // // // event.preventDefault();
    // // // const newBox = ;
    // // // const boxNumber = [...this.state.boxArray, newBox];

    // this.setState({ boxNumber: this.state.boxNumber + 1 });
    const newBoxArray = [...this.state.boxArray, 1];
    console.log(this.state.boxArray);
    this.setState({boxArray: newBoxArray});
  };

  renderBoxes() {

    const newBoxArray = this.state.boxArray;
    const listBoxes = newBoxArray.map(n => <GreenBox />);

    return listBoxes;

    // console.log(this.state.boxNumber);
    // var boxes = [];
    // for(let i = 0; i < this.state.boxNumber; i++) {
    //   console.log(i);
    //   boxes.push(<GreenBox />);
    //   // return (<GreenBox />);
    // }
    // return boxes;

    
  }

  render() {
    return (
      <div>
        <MyButton addBox={this.addBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}

export default App;
