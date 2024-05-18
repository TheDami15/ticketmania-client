import React, { useState, useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { getEvents } from '../services/EventService';
import "../styles/BodyShows.css";


const BodyShows = () => {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getEvents(currentPage);
                setEvents(data.data);
                setTotalPages(data.meta.last_page);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchEvents();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleEventClick = (eventId) => {
        navigate(`/cardticket?id=${eventId}`);
    };

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!events.length) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="forma_shows">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div className="container_shows">
                <div className="card__container_shows">
                    {events.map(event => (
                        <article key={event.id} className="card__article_shows" onClick={() => handleEventClick(event.id)}>
                            <img src={event.imageCover} alt={event.name} className="card__img_shows" />

                            <div className="card__data_shows">
                                <span className="card__description_shows">JUNE 20</span>
                                <h2 className="card__title_shows">{event.name}</h2>
                                <Link to="/cardticket" className="card__button_shows">Read More</Link>
                                <Link to='/formsedit'><i className='bx bxs-edit'></i></Link>
                                <Link to='/formsedit'><i class='bx bxs-plus-square'></i></Link>
                                
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <div className="pagination_buttons">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default BodyShows;
