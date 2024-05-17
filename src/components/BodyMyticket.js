import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/BodyMyticket.css";
import { getUserData, logout } from '../services/BodyMyticketService';
import imagecard1 from '../img/icon_hamilton.png';
import imagecard2 from '../img/icon_falsettos.png';
import imagecard3 from '../img/icon_hairsprey.png';
import imagecard4 from '../img/icon_mammamia.png';
import imagecard5 from '../img/icon_romeo.png';
import imagecard6 from '../img/icon_wicked.png';

const BodyMyticket = () => {
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);
   const navigate = useNavigate();

   const images = [
      imagecard1, imagecard2, imagecard3, imagecard4, imagecard5, imagecard6
   ];

   const getRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
   };

   const imagecard = getRandomImage();

   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const userData = await getUserData();
            setUser(userData);
         } catch (err) {
            setError(err.message);
         }
      };

      fetchUserData();
   }, []);

   const handleLogout = async (e) => {
      e.preventDefault();
      try {
         await logout();
         navigate('/'); // Redirect to home
      } catch (err) {
         setError(err.message);
      }
   };

   if (error) {
      return <div className="error">Error: {error}</div>;
   }

   if (!user) {
      return <div className="loading">Loading...</div>;
   }

   return (
      <div className="forma_ticket">
         <div className="container">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <article className="card__article">
               <div className="card__profile">
                  <img src={imagecard} alt="Profile" className="card__profile-img" />
               </div>

               <div className="card__tooltip">
                  <div className="card__content">
                     <div className="card__header">
                        <span>Tools</span>

                        <div className="card__social">
                           <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
                              <i className='bx bx-envelope'></i>
                           </a>
                           <a href="#" onClick={handleLogout}>
                              <i className='bx bxs-message-square-minus'></i>
                           </a>
                        </div>
                     </div>

                     <div className="card__data">
                        <div className="card__image">
                           <div className="card__mask">
                              <img src={imagecard} alt="Card" className="card__img" />
                           </div>

                           <span className="card__status"></span>
                        </div>

                        <h2 className="card__name">{user.name}</h2> {/* GET name */}
                        <h3 className="card__profession">{user.email}</h3> {/* GET email */}
                     </div>
                  </div>
               </div>
            </article>
         </div>
      </div>
   );
};

export default BodyMyticket;
