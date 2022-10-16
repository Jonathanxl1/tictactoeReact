import "./App";
import Square from "./components/square"

function App() {
  
  return (
    <div className="App">
      <div className="first_row" >
        {Array(3).fill(null).map((ele,idx)=>{
          return  (<Square className="square" key={idx} >{idx+1}</Square>)
        })}
      </div>
      <div className="second_row">
      {Array(3).fill(null).map((ele,idx)=>{
          return  (<Square className="square" key={idx} >{idx+3}</Square>)
        })}
      </div>
      <div className="third_row">
      {Array(3).fill(null).map((ele,idx)=>{
          return  (<Square className="square" key={idx} >{idx+6
          }</Square>)
        })}
      </div>
    </div>
  );
}

export default App;
