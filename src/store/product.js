// Action Types
const ADD_PRODUCT = 'product/addProduct';


// Action Creator
export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}



// Action Handeler
const addProductHandeler = (state, action) => {

    const nextId = (() => {
        let maxId = 0;

        state.forEach(product => {
            if(product.id > maxId) maxId = product.id
        })

        return maxId + 1
    })()

    return [...state, {...action.payload, id: nextId}];
}


// Reducer
const initialState = [];

export default function productReducer (state = initialState, action){
    switch(action.type){
        case ADD_PRODUCT: return addProductHandeler(state, action);
        default: return state;
    }
}


// State Selectors
export const selectAllProduct = (state) => state.products;

export const selectProductById = (productId) => state => {
    return state.products.find(product => product.id === productId);
}

export const selectProductStockQty = (productId) => state => {

   const orderProduct =  state.carts.find(item => item.productId === productId);
   const { stockQty } = state.products.find(product => product.id === productId);

    if(orderProduct) return stockQty - orderProduct.qty;

    return stockQty;

}
