import React from 'react';
import './FirstDz.css';
import DataCity from './DataCity';
import { cityData } from './FirstDzData';
import FlagImagesBlock from './ImagesComponent';

export default function FirstDz() {
    return (
    <main>
        <div className='container'>
            <h2>Рідне місто</h2>
        <div className='contentContainer'>
            <div className='textContainer'>
                < DataCity data={cityData}/>
            </div>
            <div className='imagesContainer'>
                < FlagImagesBlock />
            </div>
        </div>
        </div>
    </main>
    );
  } 