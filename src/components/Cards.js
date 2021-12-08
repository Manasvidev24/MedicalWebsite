import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>FEATURES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/data1.png'
              text='Data Cleaning'
              label='Dataset'
              path='/cleandata'
            />
            <CardItem
              src='images/data5.jpg'
              text='Predictive Analysis'
              label='Prediction'
              path='/predictiveanalysis'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/data2.jpg'
              text='Health Monitoring'
              label='Practical'
              path='/healthmonitoring'
            />
            <CardItem
              src='images/data3.png'
              text='User-Friendly Report'
              label='Report'
              path='/userreport'
                         
            />
                       
          </ul>
          </div>
      </div>
    </div>
  );
}

export default Cards;
