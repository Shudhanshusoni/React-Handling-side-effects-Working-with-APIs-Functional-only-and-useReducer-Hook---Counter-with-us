import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,{/*initial state to be placed here*/0})
  return (
    <div id="main">
      <span id="counter">{state}</span>
      <button id="increment-btn" onClick={()=>dispatch({type :"increment"})}></button>
      <button id="decrement-btn" onClick={()=>dispatch({type :"decrement"})}></button>
    </div>
  )
}


export default App;
