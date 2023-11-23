import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { faBars} from '@fortawesome/free-solid-svg-icons'; // Replace with the specific icon you want to use

export default function NavBar(props) {
    const { t, i18n } = useTranslation("global");
    const [Active, setActive] = useState(false)
    const handleClick= ()=>{
        setActive(!Active)
    }
    const handleChangelanguage = (lang) =>{
        i18n.changeLanguage(lang)
    }
    return (
        <div id="navbar" className={`navbar ${Active ? 'active' : ''}  grid md:grid-cols-12 xs:grid-cols-2 ${props.scrolling ? 'scrolled' : ''}`}>
            <div class="navbar-logo md:col-span-2 flex items-center px-6">
                <img className={`${props.scrolling? 'inline': 'hidden'}`} src={logo} alt='logo'/>
                <a href="/" className={`${props.scrolling? 'text-black': 'text-white'}`}>E<span>I</span>PGBM</a>
            </div>
            
            <div className='xs:flex md:hidden items-center justify-end pr-8'>
                    <div className='navbar-responsive-menu' onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars} style={{ color: props.scrolling ? 'black' : 'white'}}/>
                    </div>
            </div>
            <div className={`navbar-menu md:col-span-8 md:block ${Active ? 'sm:col-span-12 xs:col-span-12' : 'hidden'}  `}>
                <ul className={`${Active? 'xs:flex-col xs:p-10' : ''}`}>
                    <li className="p-6">
                        <a href='#home-section' className={`${props.scrolling ? 'text-black': 'text-white'} sm:text-2xl xs:text-xl`}>{t('navbar.home')}</a>
                    </li>
                    <li className="p-6">
                        <a href='#about-section' className={`${props.scrolling ? 'text-black': 'text-white'} sm:text-2xl xs:text-xl`}>{t('navbar.about')}</a>
                    </li>
                    <li className="p-6">
                        <a href='#services' className={`${props.scrolling ? 'text-black': 'text-white'} sm:text-2xl xs:text-xl`}>{t('navbar.services')}</a>
                    </li>
                    <li className="p-6">
                        <a href='#products-section' className={`${props.scrolling ? 'text-black': 'text-white'} sm:text-2xl xs:text-xl`}>{t('navbar.products')}</a>
                    </li>
                    <li className="p-6">
                        <a href='#contact-section' className={`${props.scrolling ? 'text-black': 'text-white'} sm:text-2xl xs:text-xl`}> {t('navbar.contact')}</a>
                    </li>
                    <li>
                        <select onChange={(e) =>  handleChangelanguage(e.target.value)}>
                            <option value={'fr'}>
                                Fr
                            </option>
                            <option value={'ar'}>
                                Ar  
                            </option>
                        
                    </select>
                    </li>
                </ul>
            </div>
            <div class="md:flex items-center justify-center md:col-span-2 xs:hidden">
                <div class="navbar-quote flex items-center justify-center">
                    <a href='#contact-section'> {t('navbar.request')} </a>
                </div>
            </div>
            
        </div>
    )
}
