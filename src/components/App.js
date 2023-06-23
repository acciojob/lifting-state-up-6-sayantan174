
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [btn1,setbtn1]=useState(true);
  const [btn2,setbtn2]=useState(true);
  const [btn3,setbtn3]=useState(true);


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <h3>Child Component</h3>
        <ul>
          <li>Learn React {btn1 && <button onClick={()=>{setbtn1(!btn1)}}>Complete</button>}</li>
          {/* <li>Build a React app {btn2 && <button onClick={()=>{setbtn2(!btn2)}}>Complete</button>}</li>
          <li>Deploy the React app {btn3 && <button onClick={()=>{setbtn3(!btn3)}}>Complete</button>}</li> */}
        </ul>
    </div>
  )
}

export default App
