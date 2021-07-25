import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mari berbagi dengan mereka yang membutuhkan</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/donasi.png'
              text='Kamu bisa mulai donasi di sini'
              label='Donasi'
              path='/services'
            />
            <CardItem
              src='images/bukadonasi.png'
              text='Galang dana untuk siapa pun'
              label='Buka donasi'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
