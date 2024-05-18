//rafce

import React from 'react';
import HeaderHome from '../components/HeaderHome';
import BodyHome from '../components/BodyHome';
import '../styles/Home.css';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='body'>
      <HeaderHome></HeaderHome>
      <BodyHome></BodyHome>
      <Footer></Footer>
    </div>
  )
}

export default Home
