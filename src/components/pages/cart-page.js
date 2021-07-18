import React from 'react';
import CartTable from '../cart-table';
import './cart-page.css';
import Footer from '../footer/footer';

const CartPage = () => {
    return (
        <div>
            <div className='order-block'> Order </div>
            <div className="cart"> 
                <CartTable/>
            </div>
            <Footer/>
        </div>
    )
}

export default CartPage;