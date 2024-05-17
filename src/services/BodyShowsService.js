// src/services/BodyShowsService
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

export { getEvents };
