import React from 'react';
import cartIcon from './cart.png';
import './app-header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const AppHeader = ({totalPrice}) => {
    return (
        <header className="header">
            <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 box-shadow">
                <Link to='/'>
                    <div id='logo' className='my-0 mr-md-auto'>
                        <img src='https://res.cloudinary.com/dorehapc1/image/upload/v1624013358/logo_xyk5rx.png'></img>
                    </div>
                </Link>
                <h5 class="my-0 mr-md-auto font-weight-normal"></h5>
                
                <nav class="my-2 my-md-0 mr-md-3">
                    <Link className="nav__link" to='/'>
                        Home
                    </Link>
                    <Link className="nav__link" to='/menu'>
                        Menu
                    </Link>
                    <Link className="nav__link" to='/cart'>
                        <img className="nav__cart" src={cartIcon} alt="cart"></img>
                        {totalPrice} $
                    </Link>
                </nav>
            </div>
        </header>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader);