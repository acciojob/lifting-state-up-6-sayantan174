
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <h3>Child Component</h3>
        <ul>
          <li>Learn React <button>Complete</button></li>
          <li>Build a React app <button>Complete</button></li>
          <li>Deploy the React app <button>Complete</button></li>
        </ul>
    </div>
  )
}

export default App
