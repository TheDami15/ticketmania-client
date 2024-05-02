import Home from "./pages/Home.js";
import Form  from "./pages/Form.js"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className='App'>
      <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/form' Component={Form}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
