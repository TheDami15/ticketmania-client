// src/services/TicketService.js
const getAvailableTickets = (concert) => {
    return concert.capacityTotal - concert.ticketsSold;
  };
  
  export { getAvailableTickets };
  