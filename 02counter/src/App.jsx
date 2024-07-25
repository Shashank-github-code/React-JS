import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  //let counter = 15

  const addValue = () => {
    setCounter(counter+1)
  }
  // try this. In this every setCounter is dependent on the prev counter value
  // as there is a call back in the setCounter  
  // const addValue = () => {
  //   setCounter((counter) => counter+1)
  //   setCounter((counter) => counter+1)
  //   setCounter((counter) => counter+1)
  //   setCounter((counter) => counter+1)
  // }
  const removeValue = () =>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>react tutorial {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
