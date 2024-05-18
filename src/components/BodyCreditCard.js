import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import { Elements, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import '../styles/BodyCreditCard.css';
import { input_credit_card, startTimer } from '../services/BodyCreditCardServices';

const stripePromise = loadStripe('pk_test_51P97tcCTyXwsO44Hs2k4lfOnVxzDO1MrhCqocFqUNGqwccFOBCTMWDTICcIXWC3tbGcPkOEz9dWKIFBTal0xTQ2t00jxzOjX9O');

const CheckoutForm = ({ concertId, ticketQuantity }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardName, setCardName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      completeTicketPurchase(paymentMethod.id);
    }
  };

  const completeTicketPurchase = async (paymentMethodId) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          concertId: concertId,
          payment_method_id: paymentMethodId,
          ticketQuantity: ticketQuantity
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to purchase ticket');
      }

      const data = await response.json();
      console.log('Ticket purchase successful:', data);
      // Redirect to PurchaseSuccess component after successful purchase
      navigate('/purchase-success');
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Error during ticket purchase:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-number">
        <p>Card Number</p>
        <span>Enter the 16-digit card number on the card</span>
        <div className="card-number-box">
          <CardNumberElement options={{ style: { base: { fontSize: '16px' } } }}
            className="card-expiry-element" />
        </div>
      </div>
      <div className="card-holder">
        <div className="text">
          <p>Card Name Holder</p>
          <span>Enter name card holder on the card</span>
        </div>
        <div className="input-credit">
          <input
            type="text"
            id="card-name"
            autoComplete="off"
            required
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </div>
      </div>
      <div className="card-cvv">
        <div className="text">
          <p>CVV Number</p>
          <span>Enter the 3 or 4 digits number on the card</span>
        </div>
        <div className="input-credit">
          <CardCvcElement options={{ style: { base: { fontSize: '16px' } } }}
            className="card-expiry-element" />
        </div>
      </div>
      <div className="card-expiration">
        <div className="text">
          <p>Expiry Date</p>
          <span>Enter the expiration date of the card</span>
        </div>
        <div className="input-credit">
          <CardExpiryElement
            options={{
              style: {
                base: {
                  fontSize: '16px'
                }
              }
            }}
            className="card-expiry-element"
          />

        </div>
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button type="submit" disabled={!stripe}>Pay Now</button>
    </form>
  );
};

const BodyCreditCard = () => {
  const [concertId, setConcertId] = useState(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const concertId = query.get('concertId');
    const tickets = query.get('tickets');
    setConcertId(concertId);
    setTicketQuantity(tickets);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const creditCardInput = document.getElementById('credit-card');
      if (creditCardInput) {
        input_credit_card(creditCardInput);
      }

      const display = document.querySelector('#time');
      startTimer(60 * 3, display);
    }, 0); // Adding timeout to ensure elements are available in the DOM
  }, []);

  return (
    <div id="page" className="site-credit">
      <div className="container-credit">
        <div className="outer-credit">
          <div className="header-credit">
            <div className="logo-credit">
              <a href="#"><strong>.web</strong>Pay</a>
            </div>
            <div className="time-left">
              <time id="time">03:00</time>
              <span></span>
            </div>
          </div>
          <section className="payment">
            <div className="left">
              <Elements stripe={stripePromise}>
                <CheckoutForm concertId={concertId} ticketQuantity={ticketQuantity} />
              </Elements>
            </div>
            <div className="right">
              <div className="card-virtual">
                <p className="cc-logo"></p>
                <p className="name-holder">Your Name</p>
                <p className="chip">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    viewBox="0 0 511 511"
                  >
                    <path
                      d="M455.5,56h-400C24.897,56,0,80.897,0,111.5v288C0,430.103,24.897,455,55.5,455h400c30.603,0,55.5-24.897,55.5-55.5v-288
                        C511,80.897,486.103,56,455.5,56z M464,248H343v-56.5c0-4.687,3.813-8.5,8.5-8.5H464V248z M343,263h121v65H343V263z M479,223h17v65
                        h-17V223z M479,208v-65h17v65H479z M464,168H351.5c-12.958,0-23.5,10.542-23.5,23.5V408H183V103h272.5c4.687,0,8.5,3.813,8.5,8.5
                        V168z M168,248H47v-65h121V248z M32,288H15v-65h17V288z M47,263h121v65H47V263z M263,88V71h137v17H263z M248,88H111V71h137V88z
                        M168,103v65H47v-56.5c0-4.687,3.813-8.5,8.5H168z M32,208H15v-65h17V208z M15,303h17v65H15V303z M47,343h121v65H55.5
                        c-4.687,0-8.5-3.813-8.5-8.5V343z M248,423v17H111v-17H248z M263,423h137v17H263V423z M343,408v-65h121v56.5
                        c0,4.687-3.813,8.5-8.5,8.5H343z M479,303h17v65h-17V303z M496,111.5V128h-17v-16.5c0-12.958-10.542-23.5-23.5-23.5H415V71h40.5
                        C477.832,71,496,89.168,496,111.5z M55.5,71H96v17H55.5C42.542,88,32,98.542,32,111.5V128H15v-16.5C15,89.168,33.168,71,55.5,71z
                        M15,399.5V383h17v16.5c0,12.958,10.542,23.5,23.5,23.5H96v17H55.5C33.168,440,15,421.832,15,399.5z M455.5,440H415v-17h40.5
                        c12.958,0,23.5-10.542,23.5-23.5V383h17v16.5C496,421.832,477.832,440,455.5,440z"
                    />
                  </svg>
                </p>
                <p className="highlight">
                  <span className="last-digit" id="card-number">
                    .... .... .... 4567
                  </span>
                  <span className="expiry">
                    <span className="exp-month">11</span> /
                    <span className="exp-year">25</span>
                  </span>
                </p>
              </div>
              <div className="receipt">
                <ul>
                  <li>
                    <span>Order Number</span>
                    <span>20062024</span>
                  </li>
                  <li>
                    <span>Number of Tickets</span>
                    <span>{ticketQuantity}</span>
                  </li>
                  <li>
                    <span>Tax (10%)</span>
                    <span>1.2€</span>
                  </li>
                </ul>
                <div className="total">
                  <p className="price">
                    <strong>13.20</strong>€
                  </p>
                  <p>Total you have to pay</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BodyCreditCard;
