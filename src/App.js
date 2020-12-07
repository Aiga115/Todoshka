import React,{useEffect, useState} from 'react';
import './App.css';
import Airplane from "./images/airplane.png"
import Cloud from "./images/cloud.png"
//import Func from "./func"
import Todo from "./Todo"
function App() {
  const [preload,setPreload] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreload(false)
    },10000)

    return () => clearTimeout(timer)
  },[])


  return (
    <div>
      <div className ="preload">
        {preload ? (
          <>
            <img src={Airplane} className= "airplane" alt="airplane"></img>
        <h3>Write the path towards your goal...</h3>
        <img className= "cloud1" src={Cloud} alt ="cloud"></img>
        <img className= "cloud2" src={Cloud} alt ="cloud"></img>
        <img className= "cloud3" src={Cloud} alt ="cloud"></img>
          </>
        ) : (<Todo />)}

      </div>
      
      
       
    </div>
  );
}

export default App;
