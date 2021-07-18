const initialState = {
    menu:[],
    loading: true,
    error: false,
    items:[],
    totalPrice: 0
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const itemId = state.items.findIndex(item => item.id === id);

            if (itemId >= 0){
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    amount: ++itemInState.amount
                }
                return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, itemId),
                        newItem,
                        ...state.items.slice(itemId + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            } 
            // товара раньше не было в корзине
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                amount: 1
            };
            
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };
        case 'ITEM_DELETE_FROM_CART':
            const index = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === index);
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['amount'];  
            return {
                ...state,
                items: [...state.items.slice(0,itemIndex), ...state.items.slice(itemIndex+1)],
                totalPrice: state.totalPrice - price
            }
        case 'AMOUNT_ADD_TO_CART':
            const addId = action.payload;
            const addItemId = state.items.findIndex(item => item.id === addId);

            if (addItemId >= 0){
                const itemInState = state.items.find(item => item.id === addId);
                const newItem = {
                    ...itemInState,
                    amount: ++itemInState.amount
                }
                return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, addItemId),
                        newItem,
                        ...state.items.slice(addItemId + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            } 
        case 'AMOUNT_DELETE_FROM_CART':
            const idd = action.payload;
            const itemIdd = state.items.findIndex(item => item.id === idd);
            const itemm = state.items.find(item => item.id === idd);

            if(itemm.amount >=2) {
                const newItemm =    {
                    ...itemm,
                    amount: --itemm.amount
                }
                return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, itemIdd),
                        newItemm,
                        ...state.items.slice(itemIdd + 1)
                    ],
                    totalPrice: state.totalPrice - newItemm.price
                }
            }   
            const pricee = state.items[itemIdd]['price'] * state.items[itemIdd]['amount'];  
            return {
                ...state,
                items: [...state.items.slice(0,itemIdd), ...state.items.slice(itemIdd+1)],
                totalPrice: state.totalPrice - pricee
            }
        case 'SET_ORDER' :
            return {
                menu:[],
                loading: true,
                error: false,
                items:[],
                totalPrice: 0
            };
        default:
            return state;
    }
}

export default reducer;