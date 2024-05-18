import React from 'react'
import '../styles/BodyFormEvent.css'
import { Link } from 'react-router-dom'

const BodyFormConcert = () => {
  return (
    <div className='BodyEvents'>
      <div className="container-form-events">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <h2><Link to ="/formsedit" ><i className='bx bxs-chevrons-left'></i></Link>TicketMania</h2>
        <form action="/submit" method="POST" encType="multipart/form-data">
          <div className="form-group-events">
            <label htmlFor="event_id">Event ID:</label>
            <select id="event_id" name="event_id" min="1" required></select>
          </div>
          <div className="form-group-events">
            <label htmlFor="date_concert">Date:</label>
            <input type="date" id="date_concert" name="date_concert" required></input>
          </div>
          <div className="form-group-events">
            <label htmlFor="location_concert">Location:</label>
            <input type="text" id="location_concert" name="location_concert" required></input>
          </div>
          <div className="form-group-events">
            <label htmlFor="capacity_total">Capacity Total:</label>
            <input type="number" id="capacity_total" name="capacity_total" min="0" required></input>
          </div>
          <div className="form-group-events">
            <label htmlFor="tickets_sold">Tickets Sold:</label>
            <input type="number" id="tickets_sold" name="tickets_sold" min="0" required></input>
          </div>
          <div className="form-group-events">
            <label htmlFor="price_concert">Price:</label>
            <input type="number" id="price_concert" name="price_concert" min="0" required></input>
          </div>
          <button className="btn-events" type="submit">Enviar</button>
          <div className="ul-concerts">
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BodyFormConcert
