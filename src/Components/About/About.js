import React from 'react';
import { useEffect } from 'react';
import './About.css';
import HeaderSection from '../includes/HeaderSection/HeaderSection';
import image from '../../assets/pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


export default function About() {
  const {t, i18n} = useTranslation("global");
  useEffect( () => {
    if (i18n.language === 'ar') {
      import('./styleArabic.css');
    }
    
  }
    ,[i18n.language])
  

  return (
    <div className='about-section' id='about-section'>
      <HeaderSection subTitle={t("about.subtitle")} title={t("about.title1")} title2={t("about.title2")}/>
      <div className='parent mt-16 grid md:grid-cols-2 xs:grid-cols-1'>
        <div className='about-section-content md:px-20 xs:px-10'>
          <h1 data-aos="zoom-in" data-aos-offset="160">
            {t("about.headdesc")}
          </h1>
          <div className='timeline-wrapper'>
            <div className='timeline-scroll'></div>
            <div className='timeline-content'>
              <ul>
                <li className='grid grid-cols-12'>
                  <div className='timeline-indicator col-span-1 text-white flex items-center justify-center'>
                    <FontAwesomeIcon icon={faCheckDouble} />
                  </div>
                  <h2  data-aos="fade-up" data-aos-offset="160"  className='col-span-11 xs:pl-5 md:pl-0 aos-init aos-animate'>
                    {t("about.desc1")}    
                  </h2> 
                </li>
                <li className='grid grid-cols-12'>
                  <div className='timeline-indicator col-span-1 text-white flex items-center justify-center'>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  </div>
                  <h2 data-aos="fade-up" data-aos-offset="160" className='col-span-11 xs:pl-5 md:pl-0 aos-init aos-animate'> {t("about.desc2")}</h2> 
                </li>
                <li className='grid grid-cols-12'>
                  <div className='timeline-indicator col-span-1 text-white flex items-center justify-center'>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  </div>
                  <h2  data-aos="fade-up" data-aos-offset="160"  className='col-span-11 xs:pl-5 md:pl-0 aos-init aos-animate'>
                  {t("about.desc3")}


                  </h2> 
                </li>
                <li className='grid grid-cols-12'>
                  <div className='timeline-indicator col-span-1 text-white flex items-center justify-center'>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  </div>
                  <h2  data-aos="fade-up" data-aos-offset="160"  className='col-span-11 xs:pl-5 md:pl-0 aos-init aos-animate'>
                  {t("about.desc4")}   </h2> 
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='about-section-gallery flex items-center justify-center xs:hidden md:flex'>
        <div data-aos="fade-left" className='about-section-gallery-image aos-init aos-animate'>
          <img src={image} alt='photo'/>
          <div className='about-section-gallery-image-shape'></div>
        </div>
        </div>
      </div>
    </div>
  )
}
