import { Component } from "react";

import "./App";
import Square from "./components/square"

class App extends Component {
  constructor(){
    super()
      this.state = {
      squares:Array(9).fill(null),
      turn:true,
      completeGame:false
    }
  }

  handleClick(pos){
    if(this.state.completeGame) {
      console.log("Finish Game, Reload page")
      return;
    }
    let copyGame = this.state.squares;
    copyGame[pos] = this.state.turn ? 'X' : 'O';
    this.setState({squares:[...copyGame],turn:!this.state.turn})
    this.state.squares.every(square => {return square }) && this.setState({completeGame:true})
  }
  
  render(){
    const squares  = this.state.squares
    return (
      <div className="desktop">
        <div className="container">
        <div className="columns is-desktop mt-5 ml-5" >
          <div className="column is-12" style={{height:'600px'}}>
          {squares.map((ele,idx)=>{
            return  (<Square onClick={()=>{this.handleClick(idx)}} key={idx} data={squares[idx]} ></Square>)
          })}
          </div>
          
        </div>
      </div>
      </div>
    );
  }
}

export default App;
