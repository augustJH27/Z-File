import React from 'react';
import Carousel from 'react-elastic-carousel';
// import UrgentCard from './UrgentCard';
import { Button } from './Button';
import './Urgent.css';
import image1 from '../components/images/1.jpg'

export default function App() {

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
  ]
  return (
    <div className="App">
      <div className="cards-urgent">
      <h1>Butuh Bantuan Segera</h1>
      <br></br>
      <Carousel breakPoints={breakPoints}>
      <img className="card" alt="bucin" src={image1} />
      <img className="card" alt="bucin" src={image1} />
      <img className="card" alt="bucin" src={image1} />
      <img className="card" alt="bucin" src={image1} />
      <img className="card" alt="bucin" src={image1} />
      <img className="card" alt="bucin" src={image1} />
      <img className="card" alt="bucin" src={image1} />
      <img className="card" alt="bucin" src={image1} />
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
