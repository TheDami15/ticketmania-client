import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/BodyCardTicket.css';
import { getEventDetails, getConcerts } from '../services/EventService';
import { getUserData } from '../services/AuthService';
import { getAvailableTickets } from '../services/TicketService';
import halmiton from '../img/Hamilton2.png';
import formNavigation from '../services/BodyCardTicketServices.js';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const BodyCardTicket = () => {
  const query = useQuery();
  const eventId = query.get('id');
  const [event, setEvent] = useState(null);
  const [concerts, setConcerts] = useState([]);
  const [tickets, setTickets] = useState(1);
  const [selectedConcertId, setSelectedConcertId] = useState('');
  const [availableTickets, setAvailableTickets] = useState(0);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [isTicketInputDisabled, setIsTicketInputDisabled] = useState(false);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventData = await getEventDetails(eventId);
        setEvent(eventData);
        console.log('Fetched event data:', eventData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEventData();
  }, [eventId]);

  useEffect(() => {
    const fetchConcertData = async () => {
      try {
        const concertData = await getConcerts(eventId);
        setConcerts(concertData.data);
        console.log('Fetched concert data:', concertData.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchConcertData();
  }, [eventId]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData();
        setUser(userData);
        console.log('Fetched user data:', userData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (event) {
      console.log('Updated event state:', event);
    }
  }, [event]);

  useEffect(() => {
    const initializeFormNavigation = () => {
      const nextButton = document.querySelector('.btn-next');
      const prevButton = document.querySelector('.btn-prev');

      if (nextButton && prevButton) {
        formNavigation();
      } else {
        setTimeout(initializeFormNavigation, 100); // Retry initialization
      }
    };

    initializeFormNavigation();
  }, []);

  const handleTicketChange = (event) => {
    setTickets(event.target.value);
  };

  const handleConcertChange = (event) => {
    const selectedConcertId = event.target.value;
    setSelectedConcertId(selectedConcertId);

    const selectedConcert = concerts.find(concert => concert.id === parseInt(selectedConcertId));
    if (selectedConcert) {
      const available = getAvailableTickets(selectedConcert);
      setAvailableTickets(available);
      setTickets(available > 0 ? 1 : 0); // Reset ticket count if available tickets change
      setIsTicketInputDisabled(available === 0); // Disable ticket input if no tickets are available
    }
  };

  useEffect(() => {
    const isFormValid = selectedConcertId !== '' && tickets > 0;
    setIsNextDisabled(!isFormValid);
  }, [selectedConcertId, tickets]);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!event || !event.data) {
    return <div className="loading">Loading...</div>;
  }

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
                <h2>{event.data.name}</h2> {/* Ensure event name is rendered */}
                <div className="img-ticket-show">
                  <img src={event.data.imageCover || halmiton} alt={event.data.name} /> {/* Ensure event image is rendered */}
                </div>
              </div>
              <p>{event.data.description}</p> {/* Ensure event description is rendered */}
              <label>Day:</label>
              <select name="show-dates" id="show-dates" value={selectedConcertId} onChange={handleConcertChange}>
                <option value="">Select date</option>
                {concerts.map((concert) => (
                  <option key={concert.id} value={concert.id}>
                    {new Date(concert.date).toLocaleDateString()} at {concert.location}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-two form-step">
              <div className="bg-svg"></div>
              <h2>Personal Information</h2>
              <div>
                <p>
                  All related info to the purchase will be sent to this email: {user && user.email}
                </p>
              </div>
              <div>
                <label>Tickets</label>
                {isTicketInputDisabled ? (
                  <p>No tickets available for the selected concert.</p>
                ) : (
                  <input
                    type="number"
                    min="1"
                    max={availableTickets}
                    step="1"
                    value={tickets}
                    onChange={handleTicketChange}
                    disabled={isTicketInputDisabled}
                  ></input>
                )}
              </div>
            </div>
            <div className="form-three form-step">
            </div>
            <div className="btn-group">
              <button type="button" className="btn-prev" disabled>Back</button>
              <button type="button" className="btn-next" disabled={isNextDisabled}>Next Step</button>
              <button type="button" className="btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BodyCardTicket;
