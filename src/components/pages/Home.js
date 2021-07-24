import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Cards2 from '../Cards2';
import Urgent from '../Urgent';
import NewDonation from '../NewDonation';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Cards2 />
      <Urgent />
      <NewDonation />
      <Footer />
    </>
  );
}

export default Home;
