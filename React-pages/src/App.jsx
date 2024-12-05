import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from "./home"
import Counter from "./counter"
import Stopwatch from "./stopwatch"
function App() {


  return (
 
  <div>
  <Routes>
    <Route path="/" element={<h1>Home page</h1>}></Route>
    <Route path="/counter" element={<Counter></Counter>}></Route>
    <Route path="/stopwatch" element={<Stopwatch></Stopwatch>}></Route>
    <Route path="" element={<h1></h1>}></Route>
    </Routes>
    <Home></Home>
  </div>
  );
}

export default App
