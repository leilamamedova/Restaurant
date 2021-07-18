import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category} = menuItem;
    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category"><span>{category}</span></div>
            <div className="menu__price"><span>{price} $</span></div>
            <button onClick={() => onAddToCart()} className="menu__btn">Add</button>
        </li>
    )
}

export default MenuListItem;