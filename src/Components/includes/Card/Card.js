import React from 'react';
import './Card.css';
import pliage from '../../../assets/pliage.png'

export default function Card(props) {
  return (
    <div data-aos="fade-up" data-aos-delay={props.delay} className='services-card cp-service aos-init aos-animate'>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.desc} 
        </p>
        <div className='services-card-icon'>
            <img src={pliage} alt='photo'/>
        </div>
    </div>
  )
}
