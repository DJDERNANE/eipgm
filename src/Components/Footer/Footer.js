import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faFax, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../assets/facebook-f.svg'

export default function Footer() {
  return (
    <div id='footer-section'>
      <div className='grid xs:grid-cols-1 md:grid-cols-3 footer-section-top md:gap-32 xs:gap-12 xs:pt-10 md:pt-16'>
        <div className='footer-section-information xs:hidden md:block'>
          <h1 data-aos="zoom-in" data-aos-offset="160" data-aos-delay="50">
            information
          </h1>
          <p data-aos="zoom-in" data-aos-offset="160" data-aos-delay="200">
            En 2018, EIPGBM a lancé la fabrication des (IACM 36 KV) interrupteur aérien à commande manuelle elle était la première entreprise algérienne à fabriquer des (IACM 36KV) Localement. Aujourd’hui, le taux d'integration locale à atteint 60% .
          </p>
        </div>
        <div className='footer-section-contact'>
          <h1 data-aos="zoom-in" data-aos-offset="160" data-aos-delay="50">
            Contact
          </h1>
          <ul>
            <li data-aos="zoom-in" data-aos-offset="160" data-aos-delay="200">
              <FontAwesomeIcon style={{ color: 'red' }} icon={faLocationDot} />
              <h2>
                Zone d'activité M'sila
              </h2>
            </li>
            <li data-aos="zoom-in" data-aos-offset="160" data-aos-delay="200">
              <FontAwesomeIcon style={{ color: 'red' }} icon={faPhone} />
              <h2>
                +213 035 36 60 30 - 035 36 60 26
              </h2>
            </li>
            <li data-aos="zoom-in" data-aos-offset="160" data-aos-delay="200">
              <FontAwesomeIcon style={{ color: 'red' }} icon={faFax} />
              <h2>
                035 36 60 30 (Fax)
              </h2>
            </li>
          </ul>
        </div>
        <div className='footer-section-newsletter'>
          <h1 data-aos="zoom-in" data-aos-offset="160" data-aos-delay="50">
            Newsletter
          </h1>
          <p data-aos="zoom-in" data-aos-offset="160" data-aos-delay="200">
            Inscrivez-vous à notre newsletter hebdomadaire pour recevoir les dernières nouvelles.
          </p>
          <div className='relative mt-7 aos-init aos-animate'>
            <input type='email' placeholder='Email ' />
            <div className='newsletter-submit flex items-center justify-center text-white text-lg cursor-pointer'>
            <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowRight  } />
            </div>
          </div>
        </div>
      </div>

      <div className='footer-section-bottom'>
        <div className='grid md:grid-cols-2 xs:grid-cols-1'>
          <div>
            <h3>
            EIPGBM © 2023 Tous les droits sont réservés - Développeur par  <span>innovate360</span>
            </h3>
          
          </div>
          <div className='social-media'>
          <ul>
            <li>
              <img src={facebook} alt='facebook'/>
            </li>
          </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
