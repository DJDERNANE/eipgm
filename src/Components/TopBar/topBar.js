import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TopBar.css';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'; // Replace with the specific icon you want to use

export default function TopBar(props) {
    return (
        <div id="" className={`top-bar-component flex items-center px-7 justify-between  ${props.scrolling ? 'scrolled' : ''}`}>
            <div className="flex items-center   ">
                <FontAwesomeIcon style={{ color: 'red' }} icon={faLocationDot} />
                <h1 className={`pl-2 ${props.scrolling ? 'text-black' : 'text-white'} md:text-sm sm:text-sm`}>Zone d'activité M'sila</h1>
            </div>
            <div className="flex items-center">
                <div className="lg:flex items-center md:hidden sm:hidden xs:hidden">
                    <FontAwesomeIcon style={{ color: 'red' }} icon={faPhone} />
                    <h1 className={`pl-2 ${props.scrolling ? 'text-black' : 'text-white'} md:text-sm sm:text-xs`}>+213 035 36 60 30</h1>
                </div>
                <div className="md:flex items-center ml-10 sm:flex xs:hidden">
                    <FontAwesomeIcon style={{ color: 'red' }} icon={faEnvelope} />
                    <h1 className={`pl-2 ${props.scrolling ? 'text-black' : 'text-white'} md:text-sm sm:text-xs`}>contact@eipgbm.com</h1>
                </div>
            </div>
            
        </div>
    )
}
