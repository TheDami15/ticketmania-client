import React from 'react'
import '../styles/BodyCreditCard.css'

const BodyCreditCard = () => {
    return (
<div id="page" className="site">
      <div className="container-credit">
        <div className="outer-credit">
          <div className="header-credit">
            <div className="logo-credit">
              <a href="#"><strong>.Ticket</strong>Mania</a>
            </div>
            <div className="time-left">
              <time id="time">03:00</time>
              <span>time left!</span>
            </div>
          </div>
          <section className="payment">
            <div className="left">
              <form action="" method="post">
                <div className="card-number">
                  <p>Card Number</p>
                  <span>Enter the 16-digit card number on the card</span>
                  <div className="card-number-box">
                    <input
                      type="text"
                      id="credit-card"
                      autoComplete="off"
                      placeholder="xxxx - xxxx - xxxx - xxxx"
                    ></input>
                    <span className="cc-logo"></span>
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
                    ></input>
                  </div>
                </div>
                <div className="card-cvv">
                  <div className="text">
                    <p>CVV Number</p>
                    <span>Enter the 3 or 4 digits number on the card</span>
                  </div>
                  <div className="input-credit">
                    <input
                      type="number"
                      data-maxlength="4"
                      required
                      onInput={(e) => {
                        e.target.value = e.target.value.slice(0, e.target.dataset.maxlength);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="card-expiration">
                  <div className="text">
                    <p>Expiry Date</p>
                    <span>Enter the expiration date of the card</span>
                  </div>
                  <div className="input-credit">
                    <input
                      type="number"
                      id="exp-month"
                      placeholder="MM"
                      data-maxlength="2"
                      required
                      onInput={(e) => {
                        e.target.value = e.target.value.slice(0, e.target.dataset.maxlength);
                      }}
                    ></input>
                    <strong> / </strong>
                    <input
                      type="number"
                      id="exp-year"
                      placeholder="YY"
                      data-maxlength="2"
                      required
                      onInput={(e) => {
                        e.target.value = e.target.value.slice(0, e.target.dataset.maxlength);
                      }}
                    ></input>
                  </div>
                </div>
                <button>Pay Now</button>
              </form>
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
                        M168,103v65H47v-56.5c0-4.687,3.813-8.5,8.5-8.5H168z M32,208H15v-65h17V208z M15,303h17v65H15V303z M47,343h121v65H55.5
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
                    <span>Event</span>
                    <span>Romeo & Juliet</span>
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

export default BodyCreditCard
