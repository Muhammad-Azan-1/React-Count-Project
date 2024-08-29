import  { useState } from 'react' // useState is a built-in hook provided by React. "useState hook in React allows you to change the state of any element in your UI dynamically". This can be any element rendered by your React component, whether it's an HTML element (like <div>, <button>, <p>, etc.) or a custom React component.
import './App.css'

function App() {

  let [count , setCount] = useState(0)
  
//-----------------This is for  understanding a concept of useState-------------------------------///

 // increment count 
 // These all setCount are doing the same thing so they all are considered to be one batch that's why count is incremented  to 1 not to 6
//  function addValue(){
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)  
//   setCount(count + 1)
//   if(count === 20){
//     alert("Counter value reached 20, cannot decrement further.")
//     setCount(0)
//   }
// }

// but if I want that setcount incremet the counter value directly to 6 or 10 or any else number then we have a call back function inisde the setCount function which do that
// function addValue(){
//   setCount((prevCount:number)=> prevCount + 1)
//   setCount((prevCount:number)=> prevCount + 1)
//   setCount((prevCount:number)=> prevCount + 1)
//   setCount((prevCount:number)=> prevCount + 1)    // onclick  addValue function first time the  the setcount function increments the counter directly to 6 on second time to 12
//   setCount((prevCount:number)=> prevCount + 1)  
//   setCount((prevCount:number)=> prevCount + 1)
//   if(count === 20){
//     alert("Counter value reached 20, cannot decrement further.")
//     setCount(0)
//   }
// }

//-------------------------------------------------------------------------------------------------------------------------------------------//

 // increment count 
function addValue(){
  setCount(count + 1)
  if(count === 20){
    alert("Counter value reached 20, cannot decrement further.")
    setCount(0)
  }
}

//dcrement count
function removeValue(){
  setCount(count - 1)
  if(count === 0){
    alert("Counter value reached 0, cannot decrement further.")
    setCount(0)
  }
}

  return (
    <>
     
     <h2>Counter Value : {count}</h2>
     <button onClick={addValue}>Add Value</button> 
     <br />
     <br />
    <button  onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
