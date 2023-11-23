import React from 'react';
import './Services.css';
import HeaderSection from '../includes/HeaderSection/HeaderSection';
import Card from '../includes/Card/Card';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const {t, i18n} = useTranslation("global");
  return (
    <div id='services'>
      <HeaderSection subTitle={t("services.subtitle")} title={t("services.title1")}/>
      <div className='services-wrapper grid md:grid-cols-3 xs:grid-cols-1'>
        <Card delay="150" title="Coupage" desc="Coupe : séparation précise. Métaux, matériaux divers. Précision,"/>
        <Card delay="250" title="Perçagae " desc="Perçagae : flexion matériaux. Précision, fabrication, créativité."/>
        <Card delay="50" title="Soudage" desc="Soudure : fusion métal. Solide, industrie, construction, fabrication."/>
      </div>
    </div>
  )
}
