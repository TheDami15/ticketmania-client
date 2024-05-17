import React, { useState, useEffect } from 'react';
import "../styles/BodyMyticket.css";
import imagecard1 from '../img/icon_hamilton.png';
import imagecard2 from '../img/icon_falsettos.png';
import imagecard3 from '../img/icon_hairsprey.png';
import imagecard4 from '../img/icon_mammamia.png';
import imagecard5 from '../img/icon_romeo.png';
import imagecard6 from '../img/icon_wicked.png';
const BodyMyticket = () => {

    const images = [
        imagecard1, imagecard2, imagecard3, imagecard4, imagecard5, imagecard6
    ];

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };

    const imagecard = getRandomImage();

  return (
    <div className="forma_ticket">
            <div className="container">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    <article className="card__article">
       <div className="card__profile">
          <img src={imagecard} alt="image" className="card__profile-img"></img>
       </div>
       
       <div className="card__tooltip">
          <div className="card__content">
             <div className="card__header">
                <span>Tools</span>
                
                <div className="card__social"> 
                   <a href="https://gmail.com" target="_blank">
                   <i className='bx bx-envelope'></i>
                   </a>
                   <a>
                   <i className='bx bxs-message-square-minus'></i>
                   </a>
                </div>
             </div>

             <div className="card__data">
                <div className="card__image">
                   <div className="card__mask">
                      <img src={imagecard} alt="image" className="card__img"></img>
                   </div>
                   
                   <span className="card__status"></span>
                </div>

                <h2 className="card__name">Evalyn Adson</h2>
                <h3 className="card__profession">Web designer</h3>

                <a href="#" className="card__button">
                   <i className="ri-chat-3-line"></i> <span>Send Message</span>
                </a>
             </div>
          </div>
       </div>
    </article>
 </div>
    </div>

  )
}

export default BodyMyticket
