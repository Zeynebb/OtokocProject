
export const ADD_TO_CART ="ADD_TO_CART"
export const REMOVE_FROM_CART ="REMOVE_FROM_CART"
export const GET_CART_STATE ="GET_CART_STATE"

export function addToCart(product, quantity) {
    return {
        type: ADD_TO_CART,
        payload: product,
        newQuantity: quantity
    }
}


export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export function getCartState(state) {
    return {
        type: GET_CART_STATE,
        payload: state
    }
}
