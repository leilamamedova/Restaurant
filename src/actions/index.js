const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_DELETE_FROM_CART',
        payload: id
    }
}

const deleteAmount = (id) => {
    return {
        type: 'AMOUNT_DELETE_FROM_CART',
        payload: id
    }
}

const addAmount = (id) => {
    return {
        type: 'AMOUNT_ADD_TO_CART',
        payload: id
    }
}

const setOrder = () => {
    return {
        type: 'SET_ORDER'
    }
}


export {menuLoaded, menuRequested, menuError, addedToCart, deleteFromCart, deleteAmount, addAmount, setOrder};