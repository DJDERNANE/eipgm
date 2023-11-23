import React , {useEffect} from 'react';
import './Contact.css';
import HeaderSection from '../includes/HeaderSection/HeaderSection';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const {t, i18n} = useTranslation("global");
  useEffect( () => {
    if (i18n.language === 'ar') {
      import('./styleArabic.css');
    }}
    ,[i18n.language])
  return (
    <div id='contact-section'>
      <HeaderSection title={t("contact.title1")} subTitle={t("contact.subtitle")} />
      <div className='grid md:grid-cols-1 gap-20 xs:grid-cols-1'>
        <div className='contact-section-form'>
          <h3 data-aos="zoom-in" data-aos-offset="160" dir='rtl'>
          {t("contact.text")}
          </h3>
          <form >
            <div className='grid md:grid-cols-2 xs:grid-cols-1 mt-10 gap-7'>
              <input data-aos="zoom-in" data-aos-offset="160" placeholder='Nom' type='text' />
              <input data-aos="zoom-in" data-aos-offset="160" placeholder='Prenom' type='text' />
              <input data-aos="zoom-in" data-aos-offset="160" placeholder='Email' type='email' />
              <input data-aos="zoom-in" data-aos-offset="160" placeholder='Numero telephone' type='number' />
              <textarea data-aos="zoom-in" data-aos-offset="160" placeholder='Message' rows={4} cols={50} className='xs:col-span-1 md:col-span-2 aos-init'></textarea>

            </div>
            <button data-aos="zoom-in" data-aos-offset="160" data-aos-delay="250" className='cursor-pointer contact-section-form-submit flex items-center justify-center aos-init'>
              <h1>
              {t("navbar.request")}             </h1>
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
