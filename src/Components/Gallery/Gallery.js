import React from 'react';
import './Gallery.css';
import HeaderSection from '../includes/HeaderSection/HeaderSection';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
/**Images */
import img1 from '../../assets/workshop_image_1.jpeg';
import img2 from '../../assets/workshop_image_2.jpeg';
import img3 from '../../assets/workshop_image_3.jpeg';
import img4 from '../../assets/workshop_image_4.jpeg';
import img5 from '../../assets/workshop_image_5.jpeg';
import img6 from '../../assets/workshop_image_6.jpeg';

import { useTranslation } from 'react-i18next';


export default function Gallery() {
    const { t, i18n} = useTranslation("global");
  return (
    <div id='gallery'>
    <HeaderSection title={t("gallery.title1")} subTitle={t("gallery.subtitle")} />
    <div className=''>
        <Swiper slidesPerView={3}
            spaceBetween={0} navigation={true} modules={[Navigation]} className="mySwiper" loop={true}>
            <SwiperSlide>
                <img src={img1} alt='pic' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt='pic' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt='pic' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt='pic' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt='pic' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img6} alt='pic' />
            </SwiperSlide>
        </Swiper>
    </div>
    </div>
  )
}
