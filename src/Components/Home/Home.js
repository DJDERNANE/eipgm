import React, { useEffect } from 'react';
import './Home.css';
import introvideo from '../../assets/introvideo3.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowDown } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
export default function Home() {
    const {t, i18n} = useTranslation("global");
    
    return (
        <div className='home-section' id='home-section'>
            <div className='home-section-cover'>
                <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='home-section-content h-full w-full flex flex-col items-center justify-center text-center aos-init aos-animate'>
                    <h1 data-aos="zoom-in" data-aos-offset="160" className='text-white text-8xl font-bold ' >
                        SARL E<span>I</span>PGBM
                    </h1>
                    
                        {
                            i18n.language === 'ar' ? (
                                <p><span>IACM 36KV</span>{t("home.title")}</p>
                              ) : (
                                <p>{t("home.title")}<span>IACM 36KV</span></p>
                              )  
                        }
                    
                </div>
            </div>
            <video autoPlay muted loop>
                <source src={introvideo}></source>
            </video>

            <div className='home-section-cursor flex items-center justify-center text-lg'>
                <FontAwesomeIcon icon={ArrowDown} />
            </div>
        </div>
    )
}
