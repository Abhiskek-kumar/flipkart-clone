import * as actionTypes from '../constants/cartConstants';

const cartStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")) : [];

export const cartReducer = (state = { cartItems: cartStorage }, action) => {
    let cartList;
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.cartItems.find(product => product.id === item.id);

            if (existItem) {
                cartList = state.cartItems.map(x => x.product === existItem.product ? item : x);
            } else {
                cartList = [...state.cartItems, item];
            }
            localStorage.setItem("cartItems", JSON.stringify(cartList));
            return { ...state, cartItems: cartList };
        case actionTypes.UPDATE_CART:
            cartList = state.cartItems.map((product) =>
                product.id === action.payload.id
                    ? { ...product, quantity: action.payload.quantity }
                    : product);
            localStorage.setItem("cartItems", JSON.stringify(cartList));
            return {
                ...state,
                cartItems: cartList,
            }


        case actionTypes.REMOVE_FROM_CART:
            cartList = state.cartItems.filter(product => product.id !== action.payload);
            localStorage.setItem("cartItems", JSON.stringify(cartList));
            return {
                ...state, cartItems: cartList
            }
        default:
            return state;
    }
}
