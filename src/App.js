import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Firsection from "./Firsection";
import Secsection from './Secsection.js'
import Thrsecion from './Thrsection.js'
import Thrsection from "./Thrsection.js";
const App = ()=>{


  return(
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element = {<Main/>} >
              <Route path="firsection" element = {<Firsection/>} />
              <Route path="secsection" element = {<Secsection/>} />
              <Route path="thrsection" element = {<Thrsection/>} />
            </Route>
            <Route path = "/main" element = {<Main/>}/>
            <Route path="/:ay7ga" element = {<h2>Not Found</h2>} />
          </Routes>
        </Router>
    </>
  )
}
export default App;