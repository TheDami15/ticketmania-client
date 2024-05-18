// src/components/PurchaseSuccess.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PurchaseSuccess.css';

const PurchaseSuccess = () => {
    const navigate = useNavigate(); // Initialize navigate

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="success-container">
      <h1>Purchase Successful!</h1>
      <p>Your tickets have been purchased successfully.</p>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default PurchaseSuccess;
