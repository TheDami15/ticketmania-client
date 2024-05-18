import Home from "./pages/Home.js";
import Form from "./pages/Form.js";
import Shows from "./pages/Shows.js";
import Myticket from "./pages/Myticket.js";
import CardTicket from "./pages/CardTicket.js";
import Creditcard from "./components/BodyCreditCard";
import Forms_edit from "./pages/Forms_edit.js";
import FormConcert from "./components/BodyFormConcert.js";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/myticket' element={<Myticket />} />
          <Route path='/cardticket' element={<CardTicket />} />
          <Route path='/creditcard' element={<Creditcard />} />
          <Route path='/formsedit/:id' element={<Forms_edit />} />
          <Route path='/formsadd' element={<Forms_edit />} />
          <Route path='/edit-concert/:id' element={<FormConcert />} />
          <Route path='/create-concert' element={<FormConcert />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
