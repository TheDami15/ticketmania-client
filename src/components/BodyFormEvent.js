import React from 'react'
import '../styles/BodyFormEvent.css'
import { Link } from 'react-router-dom'

const BodyFormEvent = () => {
  return (
    <div className='BodyEvents'>
        <div className="container-form-events">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <h2><Link to ="/shows" ><i className='bx bxs-chevrons-left'></i></Link>TicketMania <i className='bx bx-calendar-plus'></i> </h2>
            <form action="/submit" method="POST" encType="multipart/form-data">
                <div className="form-group-events">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                </div>
                <div className="form-group-events">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
                </div>
                <div className="form-group-events">
                    <label htmlFor="image_cover">Poster Img:</label>
                    <input type="file" id="image_cover" name="image_cover" accept="image/*" required></input>
                </div>
                <div className="form-group-events">
                    <label htmlFor="image_background">Background Img:</label>
                    <input type="file" id="image_background" name="image_background" accept="image/*" required></input>
                </div>
                <button className="btn-events" type="submit">Enviar</button>
                <div className="ul-events">
                    <ul>
                        <li>"date": "2024-05-09 23:52:23"
                            <Link to="/formseditconcert"><i className='bx bxs-edit'></i></Link>
                            <i className='bx bxs-message-x' ></i>
                        </li>
                        <li>"date": "2024-05-09 23:52:23"
                        <Link to="/formseditconcert"><i className='bx bxs-edit'></i></Link>
                            <i className='bx bxs-message-x' ></i>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
  )
}

export default BodyFormEvent
