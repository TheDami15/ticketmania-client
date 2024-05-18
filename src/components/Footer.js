import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Ana Luisa Theatre sells tickets for musicals, offering both classics and new productions. With online and box office sales, it guarantees an unforgettable experience in a welcoming and high-quality environment.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/shows">SHOWS</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: ticketmania.com</p>
                    <p>Phone: +131219089</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 TicketMania. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;