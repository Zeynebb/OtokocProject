import {GET_CART_STATE} from "../actions/cartActions";
import {  cartState } from "../initialValues/cartState";

const initialState = {
    cartState: cartState
}


export default function cartStateReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_CART_STATE:
            return {
                ...payload
            }
        default:
            return cartState;
    }


}