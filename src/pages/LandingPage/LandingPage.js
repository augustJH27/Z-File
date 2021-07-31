import React from 'react';
import '../../App.css';
import Cards from '../../components/Cards';
import Cards2 from '../../components/Cards2';
import Urgent from '../../components/Urgent';
import NewDonation from '../../components/NewDonation';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';

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
