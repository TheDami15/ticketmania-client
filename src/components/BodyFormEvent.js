import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getConcerts, deleteConcert } from '../services/EventService'; // Import the getConcerts function
import '../styles/BodyFormEvent.css';

const EventForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageCover, setImageCover] = useState(null);
    const [imageBackground, setImageBackground] = useState(null);
    const [concerts, setConcerts] = useState([]); // State to store concerts
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/v1/events/${id}`);
                const eventData = await response.json();
                const { name, description, imageCover, imageBackground } = eventData.data;

                setName(name);
                setDescription(description);
                setImageCover(imageCover);
                setImageBackground(imageBackground);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        const fetchConcertData = async () => {
            try {
                const concertData = await getConcerts(id);
                setConcerts(concertData.data);
            } catch (error) {
                console.error('Error fetching concert data:', error);
            }
        };

        if (id) {
            fetchEventData();
            fetchConcertData();
        }
    }, [id]);

    const handleDeleteConcertClick = async (concertId) => {
        try {
            await deleteConcert(concertId);
            console.log('Concert deleted successfully');
            // Refetch concerts after deletion
            const concertData = await getConcerts(id);
            setConcerts(concertData.data);
        } catch (error) {
            console.error('Error deleting concert:', error.message);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('image_cover', imageCover);
        formData.append('image_background', imageBackground);

        if (id) {
            formData.append('_method', 'PUT');
        }

        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };

            const url = id ? `http://127.0.0.1:8000/api/v1/events/${id}` : 'http://127.0.0.1:8000/api/v1/events/';

            const response = await axios.post(url, formData, config);
            console.log('Event saved:', response.data);
            console.log("Se ha actualizado con éxito");
            navigate('/shows');
        } catch (error) {
            console.error('Error saving event:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
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
                <h2>
                    <Link to="/shows"><i className='bx bxs-chevrons-left'></i></Link>
                    TicketMania
                    <Link to="/create-concert"><i className='bx bx-calendar-plus'></i></Link>

                </h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-group-events">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group-events">
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                    </div>
                    <div className="form-group-events">
                        <label htmlFor="image_cover">Poster Img:</label>
                        {imageCover && <img src={imageCover} alt="Image Cover" />}
                        <input type="file" id="image_cover" name="image_cover" accept="image/*" onChange={(e) => setImageCover(e.target.files[0])} required />
                    </div>
                    <div className="form-group-events">
                        <label htmlFor="image_background">Background Img:</label>
                        {imageBackground && <img src={imageBackground} alt="Image Background" />}
                        <input type="file" id="image_background" name="image_background" accept="image/*" onChange={(e) => setImageBackground(e.target.files[0])} required />
                    </div>
                    <button className="btn-events" type="submit">{id ? 'Update Event' : 'Create Event'}</button>
                    <div className="ul-events">
                        <ul>
                            {concerts.map((concert) => (
                                <li key={concert.id}>
                                    {`in ${concert.location} at ${new Date(concert.date).toLocaleString()}`}
                                    <a href={`/edit-concert/${concert.id}`}><i className='bx bxs-edit'></i></a>
                                    <i className='bx bxs-message-x' onClick={() => handleDeleteConcertClick(concert.id)}></i>
                                </li>
                            ))}
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EventForm;
