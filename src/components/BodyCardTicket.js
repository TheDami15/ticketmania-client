import React, { useState, useEffect } from 'react';
import '../styles/BodyCardTicket.css';
import halmiton from '../img/Hamilton2.png';
import formNavigation from '../services/BodyCardTicketServices.js'; 

const BodyCardTicket = () => {
  const [tickets, setTickets] = useState(1);

  const handleTicketChange = (event) => {
    setTickets(event.target.value);
  };

  useEffect(() => {
    formNavigation(); // Ejecuta la funcionalidad externa después de montar el componente
  }, []);

  return (
    <div id="page" className="site">
      <div className="container-cardticket">
        <div className="form-box-ticket">
          <div className="progress">
            <div className="logo-ticket"><a href="/"><span>.Ticket</span>Mania</a></div>
            <ul className="progress-steps-tickets">
              <li className="step active">
                <span>1</span>
                <p>Shows<br /><span>25 secs to complete</span></p>
              </li>
              <li className="step">
                <span>2</span>
                <p>Tickets<br /><span>60 secs to complete</span></p>
              </li>
              <li className="step">
                <span>3</span>
                <p>Credit Card<br /><span>3 minut to complete</span></p>
              </li>
            </ul>
          </div>
          <form id='form-card' action="">
            <div className="form-one form-step active">
              <div className="bg-svg">
                <h2>Name Show</h2>
                <div className="img-ticket-show">
                  <img src={halmiton} alt="Hamilton"></img>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit nulla, perferendis exercitationem, sit odio quos quas molestiae aperiam dolorem eaque, labore libero suscipit maiores ad. Asperiores consectetur adipisci aliquam.</p>
              <label>Day:</label>
              <select name="show-dates" id="show-dates">
                <option value="">Select date</option>
                <option value="Hamilton">June 20</option>
              </select>
            </div>
            <div className="form-two form-step">
              <div className="bg-svg"></div>
              <h2>Personal Information</h2>
              <div>
                <label>Email</label>
                <input type="text" placeholder="your Email"></input>
              </div>
              <div>
                <label>Tickets</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  value={tickets}
                  onChange={handleTicketChange}
                ></input>
              </div>
            </div>
            <div className="form-three form-step">
            </div>
            <div className="btn-group">
              <button type="button" className="btn-prev" disabled>Back</button>
              <button type="button" className="btn-next">Next Step</button>
              <button type="button" className="btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BodyCardTicket;