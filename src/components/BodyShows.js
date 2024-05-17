import React from 'react'
import falsettos from '../img/Falsettos.png';
import halmiton from'../img/Hamilton2.png';
import mamma from '../img/MammaMia3.png';
import romeo from '../img/RomeoJulieta.png';
import wicked from '../img/wicked2.png';
import "../styles/BodyShows.css";

const BodyShows = () => {

  return (
    <div className="forma_shows">
         <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <div className="container_shows">
        <div className="card__container_shows">
        <article className="card__article_shows">
            <img src={falsettos} alt="image" className="card__img_shows"></img>

            <div className="card__data_shows">
                <span className="card__description_shows">JUNE 18</span>
                <h2 className="card__title_shows">Falsettos</h2>
                <a href="#" className="card__button_shows">Read More</a>
                <a href='#'><i class='bx bxs-edit' ></i></a>
                
            </div>
        </article>

        <article className="card__article_shows">
            <img src={halmiton} alt="image" className="card__img_shows"></img>

            <div className="card__data_shows">
                <span className="card__description_shows">JUNE 16</span>
                <h2 className="card__title_shows">Halmiton </h2>
                <a href="#" className="card__button_shows">Read More</a>
                <a href='#'><i class='bx bxs-edit' ></i></a>
            </div>
        </article>

        <article className="card__article_shows">
            <img src={romeo} alt="image" className="card__img_shows"></img>

            <div className="card__data_shows">
                <span className="card__description_shows">JUNE 20</span>
                <h2 className="card__title_shows">Romeo & Julieta</h2>
                <a href="#" className="card__button_shows">Read More</a>
                <a href='#'><i class='bx bxs-edit' ></i></a>
            </div>
        </article>

        <article className="card__article_shows">
            <img src={wicked} alt="image" className="card__img_shows"></img>

            <div className="card__data_shows">
                <span className="card__description_shows">JUNE 20</span>
                <h2 className="card__title_shows">Romeo & Julieta</h2>
                <a href="#" className="card__button_shows">Read More</a>
                <a href='#'><i class='bx bxs-edit' ></i></a>
            </div>
        </article>

        <article className="card__article_shows">
            <img src={mamma} alt="image" className="card__img_shows"></img>

            <div className="card__data_shows">
                <span className="card__description_shows">JUNE 20</span>
                <h2 className="card__title_shows">Romeo & Julieta</h2>
                <a href="#" className="card__button_shows">Read More</a>
                <a href='#'><i class='bx bxs-edit' ></i></a>
            </div>
        </article>
        
        </div>
        </div>
    </div>
  )
}

export default BodyShows
