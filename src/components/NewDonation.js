import React from 'react';
import Carousel from 'react-elastic-carousel';
// import UrgentCard from './UrgentCard';
import { Button } from './Button';
import './Urgent.css';
import image1 from '../components/assets/images/1.jpg';
import image2 from '../components/assets/images/2.jpg';
import image3 from '../components/assets/images/3.jpg';
import image4 from '../components/assets/images/4.jpg';
import image5 from '../components/assets/images/5.jpg';

export default function App() {

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
  ]
  return (
    <div className="urgent-carousel-fr">
      <div className="cards-urgent">
      <h1>Butuh Donasi Terbaru</h1>
      <br></br>
      <Carousel className='o-carousel-urgent'  breakPoints={breakPoints}>
      <img className="m-image-urgent" alt="bucin" src={image1} />
      <img className="m-image-urgent" alt="bucin" src={image2} />
      <img className="m-image-urgent" alt="bucin" src={image3} />
      <img className="m-image-urgent" alt="bucin" src={image4} />
      <img className="m-image-urgent" alt="bucin" src={image5} />
      <img className="m-image-urgent" alt="bucin" src={image1} />
      <img className="m-image-urgent" alt="bucin" src={image2} />
      <img className="m-image-urgent" alt="bucin" src={image3} />
      </Carousel>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Lihat Semua
        </Button>
      </div>
      </div>
    </div>
  );
}
