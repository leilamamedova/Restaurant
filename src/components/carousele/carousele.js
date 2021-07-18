import React from 'react';
import './carousele.css';
import {Link} from 'react-router-dom';

import slide1 from './image/slide-1.jpg';
import slide2 from './image/slide-2.jpg';
import slide3 from './image/slide-3.jpg';

const Carousele = () => {
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators ">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1}  className="image" alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Restaurant</h2>
                        <h3>enjoy it</h3>
                    </div>
                </div> 
                <div className="carousel-item">
                    <img src={slide2} className="image" alt="Second slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Restaurant</h2>
                        <h3>enjoy it</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="image" alt="Third slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Restaurant</h2>
                        <h3>enjoy it</h3>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon"></span> </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    )
};

export default Carousele;