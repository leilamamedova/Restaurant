import React from 'react';
import './thanks-page.css';
import Footer from '../footer/footer';
import CartImage from './cart.png';

const ThanksPage = () => {
    return (
        <div>
            <div className='thanks-page'>
                <img className='thanks-img' src={CartImage}></img>
                <p className='thanks-title'>Great!</p>
            </div>
            <Footer/>
        </div>
    )
}

export default ThanksPage;
