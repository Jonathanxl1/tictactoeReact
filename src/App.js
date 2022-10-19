import "./App";
import Square from "./components/square"

function App() {
  
  return (
    <div className="desktop">
      <div className="container">
      <div className="columns is-desktop mt-5 ml-5" >
        <div className="column is-12" style={{height:'600px'}}>
        {Array(9).fill(null).map((ele,idx)=>{
          return  (<Square  key={idx} >{idx+1}</Square>)
        })}
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default App;
