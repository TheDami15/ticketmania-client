// src/services/TicketService.js

const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

const getAvailableTickets = (concert) => {
  return concert.capacityTotal - concert.ticketsSold;
};

const getUserTickets = async () => {
  const response = await fetch(`${API_BASE_URL}/tickets`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch tickets');
  }

  const data = await response.json();
  return data;
};

const getConcertById = async (concertId) => {
  const response = await fetch(`${API_BASE_URL}/concerts/${concertId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch concert');
  }

  const data = await response.json();
  return data;
};

const getEventById = async (eventId) => {
  const response = await fetch(`${API_BASE_URL}/events/${eventId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch event');
  }

  const data = await response.json();
  return data;
};

export { getAvailableTickets, getUserTickets, getConcertById, getEventById };
