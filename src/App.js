import Home from "./pages/Home.js";
import Form  from "./pages/Form.js"
import Shows from "./pages/Shows.js";
import Myticket from "./pages/Myticket.js";
import CardTicket from "./pages/CardTicket.js";
import Creditcard from "./components/BodyCreditCard";
import PaymentComplete from './components/PaymentComplete';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className='App'>
      <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/form' Component={Form}></Route>
          <Route path='/shows' Component={Shows}></Route>
          <Route path='/myticket' Component={Myticket}></Route>
          <Route path='/cardticket' Component={CardTicket}></Route>
          <Route path='/creditcard' Component={Creditcard}></Route>
        <Route path="/payment-complete" element={<PaymentComplete />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
