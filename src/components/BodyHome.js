import React, { useState, useEffect } from 'react';
import { useCarousel, fetchEvents } from '../services/BodyHomeServices';
import '../styles/BodyHome.css';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

const BodyHome = () => {
    const { carouselRef, showSlider } = useCarousel();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const loadEvents = async () => {
            try {
                setLoading(true);
                const fetchedEvents = await fetchEvents();
                setEvents(fetchedEvents);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch events');
                setLoading(false);
            }
        };
        loadEvents();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="list">
                {events.map(event => (
                    <div className="item" key={event.id}>
                        <img src={event.imageBackground} alt={event.name}></img>
                        <div className="content">
                            <div className="title">{event.name.toUpperCase()}</div>
                            <div className="topic">MUSICAL</div>
                            <div className="author">{new Date(event.createdAt).toLocaleDateString()}</div>
                            <div className="des">{event.description}</div>
                            <div className="buttons">
                                {isLoggedIn() && (
                                    <button className="button-see-more">
                                        <Link to={`/cardticket?id=${event.id}`} className="link-button">SEE MORE</Link>
                                    </button>
                                )}
                                {isLoggedIn() ? (
                                    <button className="button-my-ticket">
                                        <Link to="/myticket" className="link-button">My Ticket</Link>
                                    </button>
                                ) : (
                                    <button className="button-log-in">
                                        <Link to="/form" className="link-button">LOG IN</Link>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="thumbnail">
                {events.map(event => (
                    <div className="item" key={event.id}>
                        <img src={event.imageCover} alt={event.name}></img>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
            </div>
            <div className="time"></div>
        </div>
    );
};

export default BodyHome;