import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);

  const addValue = () =>{

    // if(counter < 20){
    //   counter++;
    //   setCounter(counter);
    // }else{
    //   setCounter(20);
    // }

    setCounter(prvCounter => prvCounter + 1)
    setCounter(prvCounter => prvCounter + 1)
    setCounter(prvCounter => prvCounter + 1)
    setCounter(prvCounter => prvCounter + 1)
      
  }

  const removeValue = () =>{

    // if(counter > 0){
    //   counter--;
    //   setCounter(counter);
    // }else{
    //   setCounter(0);
    // }

    setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)

  }

  return (
    <>
    <h2>Start React Neeraj</h2>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add</button>
    <br></br><br></br>
    <button onClick={removeValue}>Decrese</button>
    </>
  )
}

export default App
