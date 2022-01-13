import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems,
}

export default function cartReducer(state = initialState, { type, payload, newQuantity }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.productNo === payload.productNo)
            if (product) {
                product.quantity = parseInt(product.quantity) +parseInt(newQuantity)
                return {
                    ...state
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: newQuantity, product: payload }]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.productNo !== payload.productNo)

            }
        default:
            return state;
    }


}