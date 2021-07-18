import React from 'react';
import './footer.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Footer = () => {
    return (
        <footer className="footer">
            <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 box-shadow">
                <Link to='/'>
                    <div id='footer-logo'>
                        <img src='https://res.cloudinary.com/dorehapc1/image/upload/v1624013358/logo_xyk5rx.png'></img>
                    </div>
                </Link>
                <h5 class="my-0 mr-md-auto font-weight-normal"></h5>
                
                <nav class="my-2 my-md-0 mr-md-3">
                    <div className='soc'>
                        <p>Subscribe Us!</p>
                        <ul className='social'>
                            <a href='https://www.facebook.com/' target="_blank"><img className='soc-icons' src='https://res.cloudinary.com/dorehapc1/image/upload/v1624560658/facebook-2-icon-16-256_j3g1bv.png'></img></a>
                            <a href='https://www.instagram.com/' target="_blank"><img className='soc-icons' src='https://res.cloudinary.com/dorehapc1/image/upload/v1624560661/instagram-2-icon-16-256_q71grg.png'></img></a>
                            <a href='https://twitter.com/' target="_blank"><img className='soc-icons' src='https://res.cloudinary.com/dorehapc1/image/upload/v1624560598/twitter-2-icon-16-256_pvarww.png'></img></a>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
    )
};

export default Footer;