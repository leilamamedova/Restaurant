import React from 'react';
import './info.css';
import {Link} from 'react-router-dom';
import sideImage from './side-image.jpg';


const Info = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-6" id='left'>
                        <h3>Welcome to Restaurant</h3>
                        <h1>We are a modern restaurant with delicious food</h1>
                        <p>We would like to take this opportunity to welcome you to our restaurant. We guarantee you the freshest food, delivered daily to our dock, prepared to your liking.</p>
                        <img className='info-img-1' src='https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=' />
                    </div>
                    <div class="col-6" id='right'>
                        <img className='info-img-2' src= {sideImage} />                
                    </div>  
                </div>
            </div>

            <div id="contact-info">
                <div class="row">
                    <div class="col-3">
                        <h5>Address</h5>
                        <hr/>
                        <p className='info-text'>1000, Baku</p>
                    </div>

                    <div class="col-3">
                        <h5>Phone</h5>
                        <hr/>
                        <p className='info-text'>+994 55 123 45 67</p>
                    </div>

                    <div class="col-3">
                        <h5>Working Hour</h5>
                        <hr/>
                        <p className='info-text'>Every day 11:00am – 10:00pm</p>
                    </div>

                    <div class="col-3">
                        <h5>Email</h5>
                        <hr/>
                        <p className='info-text'>mail@gmail.com</p>
                    </div>
                </div>
            </div>

            <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74111.36483278601!2d49.81978365584607!3d40.42331968922409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2z0JHQsNC60YMsINCQ0LfQtdGA0LHQsNC50LTQttCw0L0!5e0!3m2!1sru!2s!4v1624036821950!5m2!1sru!2s" ></iframe>

        </div>
    )
};

export default Info;