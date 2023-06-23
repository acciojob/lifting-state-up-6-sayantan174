
import React from "react";
import './../styles/App.css';

const App = () => {
  let btn1=true;
  let btn2=true;
  let btn3=true;
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <h3>Child Component</h3>
        <ul>
          <li>Learn React {btn1 && <button onClick={()=>{btn1=!btn1}}>Complete</button>}</li>
          <li>Build a React app {btn2 && <button onClick={()=>{btn2=!btn2}}>Complete</button>}</li>
          <li>Deploy the React app {btn3 && <button onClick={()=>{btn3=!btn3}}>Complete</button>}</li>
        </ul>
    </div>
  )
}

export default App
