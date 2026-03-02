import React from 'react'
import User from './Components/User';
import Parent from './components/Parent';
import State from './hooks/State';   // ✅ Capital S
import Form from './hooks/Form';   

const App = () => {
  return (
    <>
      <div>App</div>
      <Form />
      <State />          {/* ✅ Now matches import */}
      <Parent />
      <User 
        name="xyz" 
        age={19} 
        skills={["HTML","CSS","JS","Java"]}
      />
    </>
  );
}

export default App;



/*import React from "react";
import Parent from "./components/Parent";          // or "./components/Parent"
import User from "./components/User";

const App = () => {
  return (
    <>
      <Parent />
      <User name="xyz" age={33} skills={["HTML", "CSS", "JS", "JAVA"]} />
    </>
  );
};

export default App;*/