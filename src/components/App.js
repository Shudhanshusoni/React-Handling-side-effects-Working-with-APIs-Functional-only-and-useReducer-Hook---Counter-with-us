import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const initialState=0;
const App = () => {
const [state,dispatch] = useReducer(counterReducer,{/*initial state to be placed here*/initialState})
function Increment(){
  dispatch({type:'increment'})
}
function Decrement(){
  dispatch({type:'decrement'})
}
  return (
    <div id="main">
      <span id="counter">{state}</span>
      <button id="increment-btn" onClick={Increment}></button>
      <button id="decrement-btn" onClick={Decrement}></button>
    </div>
  )
}


export default App;
