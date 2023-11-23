import React from 'react';
import './Produits.css';
import HeaderSection from '../includes/HeaderSection/HeaderSection';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import { useTranslation } from 'react-i18next';

export default function Produits() {

    const {t, i18n} = useTranslation("global")

    return (
        <div id='products-section' className='pt-8'>
            <HeaderSection title={t("products.title1")} subTitle={t("products.subtitle")} pro={true} />
            <div className='mt-16 grid xs:grid-cols-1 md:grid-cols-2 md:gap-16 xs:gap-32 mb-20'>
                <div className='product-card cursor-pointer'>
                    <div className='product-card-image aos-init' data-aos="zoom-in">
                        <img src={product1} alt='pro1' />
                    </div>
                    <div className='product-card-content aos-init'>
                        <h1>
                            Interrupteurs aériens
                        </h1>
                        <ul>
                            <li>
                                Interrupteurs P94
                            </li>
                            <li>
                                Alduti-Rupter Interrupteurs
                            </li>
                            <li>
                                Interrupteurs IACM
                            </li>
                            <li>
                                Instructions d'assemblage P-94
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='product-card cursor-pointer'>
                    <div className='product-card-image aos-init' data-aos="zoom-in">
                        <img src={product2} alt='pro2' />
                    </div>
                    <div className='product-card-content aos-init'>
                        <h1>
                            Sectionneurs
                        </h1>
                        <ul>
                            <li>
                                Sectionneurs P-94
                            </li>
                            <li>
                                Sectionneurs SCLB 24
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
