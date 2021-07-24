import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Kategori Donasi</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/feature_1.png'
              text='Bantu saudara-saudara yang tengah mengalami kesulitan'
              label='Kemanusiaan'
              path='/services'
            />
            <CardItem
              src='images/feature_3.png'
              text='Demi generasi penerus yang lebih maju'
              label='Pendidikan'
              path='/products'
            />
            <CardItem
              src='images/feature_2.png'
              text='Sehatlah negeriku'
              label='Kesehatan'
              path='/sign-up'
            />
            <CardItem
              src='images/feature_4.png'
              text='Ulurkan tangan untuk anak-anak yang kurang beruntung'
              label='Anak'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
