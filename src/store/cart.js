// Action Types
const ADD_TO_CART = 'cart/addToCart'
const REMOVE_FROM_CART = 'cart/removeFromCart'
const INCREMENT_QTY = 'cart/incrementQuantity'
const DECREMENT_QTY = 'cart/decrementQuantity'

// Action Creators
export const addToCart = (payload) => ({type: ADD_TO_CART, payload})

export const removeFromCart = (cartId) => ({type: REMOVE_FROM_CART, payload: cartId})

export const incrementQty = (payload) => ({type: INCREMENT_QTY, payload})

export const decrementQty = (payload) => ({type: DECREMENT_QTY, payload})



// Action Handeler
const addToCartHandeler = (state, action) => {
    const nextId = (() => {
        let maxId = 0

        state.forEach(item => {
            if(item.id > maxId) maxId = item.id
        })

        return maxId + 1
    })()

    
    const exists = state.find(item => item.productId === action.payload.productId);

    if(exists) { 
        return state.map(item => {
            if(item.productId === action.payload.productId){
                let currentQty = item.qty + 1;
                if(currentQty > action.payload.productStockQty) currentQty = currentQty - 1
                return {...item, qty: currentQty}
            }
            return item;
        })
    }

    return [...state, {id: nextId, productId: action.payload.productId, price: action.payload.price, qty: 1}];
}


const removeFromCartHandeler = (state, action) => {
    return state.filter(item => item.id !== action.payload);
}


const incrementQtyHandeler = (state, action) => {
    return state.map(item => {

        if(item.id === action.payload.cartId) {
            let currentQty = item.qty + 1

            if(currentQty > action.payload.stockQty)  currentQty = currentQty - 1 

            return {...item, qty: currentQty}
        }

        return item;
    })
}


const decrementQtyHandeler = (state, action) => {
    return state.map(item => {
        
        if(item.id === action.payload.cartId) {
            let currentQty = item.qty - 1

            if(currentQty <= 0)  currentQty = 1

            return {...item, qty: currentQty}
        }

        return item;
    })
}


// Reducer
const initialState = [];

const cartReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_TO_CART: return addToCartHandeler(state, action);
        case REMOVE_FROM_CART: return removeFromCartHandeler(state, action);
        case INCREMENT_QTY: return incrementQtyHandeler(state, action);
        case DECREMENT_QTY: return decrementQtyHandeler(state, action);
        default: return state;
    }

}

export default cartReducer;


// State Selectors
export const selectAllCart = (state) => state.carts;

export const selectTotalCartItemCount = (state) => {
    return state.carts.reduce((totalCount, item) => totalCount + item.qty, 0);
}

export const selectSubtotlTotalPrice = (state) => {
    return state.carts.reduce((subTotalPrice, item) => subTotalPrice + (item.qty * item.price), 0);
}