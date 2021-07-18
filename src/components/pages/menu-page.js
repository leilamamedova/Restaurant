import React from 'react';
import MenuList from '../menu-list';
import './menu-page.css';
import Footer from '../footer/footer';

const MenuPage = () => {
    return (
        <div>
            <div className='menu-block'> Menu </div>
            <MenuList/>
            <Footer/>
        </div>
    )
}

export default MenuPage;
