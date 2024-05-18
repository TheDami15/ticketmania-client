import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/BodyFormEvent.css';

const BodyFormConcert = () => {
    const [eventId, setEventId] = useState('');
    const [dateConcert, setDateConcert] = useState('');
    const [locationConcert, setLocationConcert] = useState('');
    const [capacityTotal, setCapacityTotal] = useState('');
    const [ticketsSold, setTicketsSold] = useState('');
    const [priceConcert, setPriceConcert] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchConcertData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/concerts/${id}`);
                const concertData = response.data.data;

                setEventId(concertData.eventId);
                setDateConcert(concertData.date);
                setLocationConcert(concertData.location);
                setCapacityTotal(concertData.capacityTotal);
                setTicketsSold(concertData.ticketsSold);
                setPriceConcert(concertData.price);
            } catch (error) {
                console.error('Error fetching concert data:', error);
            }
        };

        if (id) {
            fetchConcertData();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            eventId: eventId,
            date: dateConcert,
            location: locationConcert,
            capacityTotal: capacityTotal,
            ticketsSold: ticketsSold,
            price: priceConcert
        };
        
        console.log(formData);
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };

            let url = `http://127.0.0.1:8000/api/v1/concerts`;
            let method = 'post';

            if (id) {
                url = `http://127.0.0.1:8000/api/v1/concerts/${id}`;
                method = 'put';
            }

            const response = await axios({
                method: method,
                url: url,
                data: formData,
                ...config
            });

            console.log('Concert saved:', response.data);
            console.log("Se ha actualizado con éxito");
            navigate('/shows');
        } catch (error) {
            console.error('Error saving concert:', error);
            setErrorMessage('Error saving concert.');
            if (error.response) {
                console.error('Response data:', error.response.data);
                setErrorMessage(error.response.data.message);
            } else if (error.request) {
                console.error('No response was received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
    };

    return (
        <div className='BodyEvents'>
            <div className="container-form-events">
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                <h2><Link to="/shows"><i className='bx bxs-chevrons-left'></i></Link>TicketMania</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group-events">
                        <label htmlFor="event_id">Event ID:</label>
                        <input
                            type="text"
                            id="event_id"
                            name="event_id"
                            value={eventId}
                            onChange={(e) => setEventId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-events">
                        <label htmlFor="date_concert">Date:</label>
                        <input
                            type="datetime-local"
                            id="date_concert"
                            name="date_concert"
                            value={dateConcert}
                            onChange={(e) => setDateConcert(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-events">
                        <label htmlFor="location_concert">Location:</label>
                        <input
                            type="text"
                            id="location_concert"
                            name="location_concert"
                            value={locationConcert}
                            onChange={(e) => setLocationConcert(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-events">
                        <label htmlFor="capacity_total">Capacity Total:</label>
                        <input
                            type="number"
                            id="capacity_total"
                            name="capacity_total"
                            value={capacityTotal}
                            onChange={(e) => setCapacityTotal(e.target.value)}
                            min="0"
                            required
                        />
                    </div>
                    <div className="form-group-events">
                        <label htmlFor="tickets_sold">Tickets Sold:</label>
                        <input
                            type="number"
                            id="tickets_sold"
                            name="tickets_sold"
                            value={ticketsSold}
                            onChange={(e) => setTicketsSold(e.target.value)}
                            min="0"
                            required
                        />
                    </div>
                    <div className="form-group-events">
                        <label htmlFor="price_concert">Price:</label>
                        <input
                            type="number"
                            id="price_concert"
                            name="price_concert"
                            value={priceConcert}
                            onChange={(e) => setPriceConcert(e.target.value)}
                            min="0"
                            required
                        />
                    </div>
                    <button className="btn-events" type="submit">{id ? 'Update Concert' : 'Create Concert'}</button>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default BodyFormConcert;
