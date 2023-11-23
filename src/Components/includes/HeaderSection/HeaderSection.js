import React, {useEffect} from 'react';
import './HeaderSection.css';
import logo from '../../../assets/img1.png';
import logo2 from '../../../assets/img2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeaderSection(props) {
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          offset: 160, // Adjust the offset as needed
        });
      }, []);
    return (
        <div className='section-header my-10'>
            <div className='section-header-icon flex items-center justify-center aos-init aos-animate' data-aos="flip-left" data-aos-offset='50'>
                <img src={props.pro ? logo2 : logo} alt='logo' />
            </div>
            <div className='mt-8 text-center'>
                <h2 className={`${props.pro? 'text-white' : ''} md:text-2xl font-semibold xs:text-lg `} data-aos="zoom-in" data-aos-offset="100">
                   {props.subTitle}
                </h2>
                <h1 className={`${props.pro? 'text-white' : ''} md:text-5xl font-bold xs:text-2xl`} data-aos="zoom-in" data-aos-offset="160" >
                    {props.title} <br/> {props.title2}
                </h1>
            </div>

        </div>
    )
}
