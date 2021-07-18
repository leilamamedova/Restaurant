import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCart, deleteAmount, setOrder, addAmount} from '../../actions/';
import WithRestoService from '../hoc';
import {Link} from 'react-router-dom';

const CartTable = ({items, deleteFromCart, deleteAmount, RestoService, setOrder, addAmount}) => {
    if( items.length === 0){
        return (<div className="cart__title"> Your cart is empty </div>)
    }
    return (
        <div className='cart'>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title,price,url,id,amount} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt="Cesar salad"></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price*amount}$</div>
                                <div className="cart__item-amount">{amount}</div>
                                <div onClick={() => deleteAmount(id)} className="cart__delete__amount"><img src='https://res.cloudinary.com/dorehapc1/image/upload/v1625588048/down-arrow_erxod3.png'></img></div>
                                <div onClick={() => addAmount(id)} className="cart__add__amount"><img src='https://res.cloudinary.com/dorehapc1/image/upload/v1625588048/up-arrow_zzog7l.png'></img></div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close"><img src='https://res.cloudinary.com/dorehapc1/image/upload/v1625588362/close_wogour.png'></img></div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to='/thanks'>
                <button onClick = {() => { RestoService.setOrder(generateOrder(items)); setOrder() } } className = "order">Make an order</button>
            </Link>
        </div>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            amount: item.amount
        }
    })
    return newOrder;
}


const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = {
    deleteFromCart,
    deleteAmount,
    setOrder,
    addAmount
}

export default WithRestoService()(connect(mapStateToProps,mapDispatchToProps)(CartTable));