import { useState } from 'react'
import './App.css'

function App() {
 const [count,setcount]=useState(0);
  function change(){
    setcount(count+1);
  }
  function change2(){

    setcount(count-1);
  }
  function reset(){
    setcount(0);
  }
  return <div>
     <h1 className='heading'>{count}</h1>
     <button onClick={change}>+</button>
     <button onClick={change2}>-</button>
     <button onClick={reset}>Reset</button>

  </div>;

}

export default App
