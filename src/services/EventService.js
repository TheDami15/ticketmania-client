// src/services/EventService.js
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

const getEvents = async (page = 1) => {
    const response = await fetch(`${API_BASE_URL}/events?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch events');
    }

    const data = await response.json();
    return data;
};

const getEventDetails = async (eventId) => {
    const response = await fetch(`${API_BASE_URL}/events/${eventId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch event details');
    }

    const data = await response.json();
    return data;
};

const getConcerts = async (eventId) => {
    const response = await fetch(`${API_BASE_URL}/concerts?eventId[eq]=${eventId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch concerts');
    }

    const data = await response.json();
    return data;
};

const deleteEvent = async (eventId) => {
    const response = await fetch(`${API_BASE_URL}/events/${eventId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to delete event');
    }

    return response.json();
};

export { getEvents, getEventDetails, getConcerts, deleteEvent };
