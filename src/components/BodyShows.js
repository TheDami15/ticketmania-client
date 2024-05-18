import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEvents, deleteEvent } from '../services/EventService';
import { getUserData } from '../services/AuthService';
import "../styles/BodyShows.css";

const BodyShows = () => {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);  // Nuevo estado para el usuario
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

    const handleEditClick = (eventId) => {
        navigate(`/formsedit/${eventId}`);
    };

    const handleAddClick = (eventId) => {
        navigate(`/formsadd`);
    };
    
    const handleDeleteClick = async (eventId) => {
        try {
            await deleteEvent(eventId);
            console.log('Event deleted successfully');
            navigate('/');
        } catch (error) {
            console.error('Error deleting event:', error.message);
        }
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
                        <article key={event.id} className="card__article_shows">
                            <img src={event.imageCover} alt={event.name} className="card__img_shows" />
                            <div className="card__data_shows">
                                <span className="card__description_shows">JUNE 20</span>
                                <h2 className="card__title_shows">{event.name}</h2>
                                {user && user.is_admin === false && (
                                    <button onClick={() => handleEventClick(event.id)} className="card__button_shows">Buy Ticket</button>
                                )}
                                {user && user.is_admin === true && (
                                    <button onClick={() => handleEditClick(event.id)}><i className='bx bxs-edit'></i></button>
                                )}
                                {user && user.is_admin === true && (
                                    <button onClick={() => handleAddClick(event.id)}><i className='bx bxs-plus-square'></i></button>
                                )}
                                {user && user.is_admin === true && (
                                    <button onClick={() => handleDeleteClick(event.id)}><i className='bx bxs-message-alt-minus'></i></button>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
                <div className="pagination_buttons">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>

        </div>

    );
};

export default BodyShows;
