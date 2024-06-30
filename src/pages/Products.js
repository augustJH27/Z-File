
// function Cards() {
//   return (
//     <div className='cards'>
//       <h1>Apa itu WeShare?</h1>

//     </div>
//   );
// }

// // export default Cards;

import React from 'react';
import styled from 'styled-components';
import CardItem from '../components/CardItem';
import '../components/Cards.css';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin: 20px 0;
  text-align: center;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  max-width: 800px;
  text-align: justify;
`;

// WeSharePage component
function WeSharePage() {
  return (
    <PageContainer>
      <Heading>Apa itu WeShare?</Heading>
      <SubHeading>Subjudul di sini</SubHeading>
      <Paragraph>
        WeShare adalah platform yang memungkinkan kamu untuk berbagi kebahagiaan dengan cara berdonasi. Melalui WeShare, kamu bisa memberikan bantuan kepada mereka yang membutuhkan dengan cara yang mudah dan transparan.
      </Paragraph>
      <Paragraph>
        Selain berdonasi, WeShare juga memungkinkan kamu untuk memulai kampanye penggalangan dana sendiri. Kamu bisa mengajak teman, keluarga, dan masyarakat luas untuk ikut berkontribusi dalam kampanye yang kamu buat.
      </Paragraph>
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
      <Paragraph>
        Dengan WeShare, kita bisa bersama-sama membantu mewujudkan mimpi banyak orang. Yuk, mulai berbagi kebahagiaan sekarang!
      </Paragraph>
    </PageContainer>
  );
}

export default WeSharePage;
