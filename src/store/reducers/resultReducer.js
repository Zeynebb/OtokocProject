
import { ADD_KDV, ADD_SUBTOTAL } from '../actions/resultActions';
import { KDV, subTotal } from '../initialValues/result';

const initialState = {
    subTotal: subTotal,
    kdv: KDV
}
let newSubTotal = 0;
let kdvTotal = 0;

export default function resultReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_SUBTOTAL:
            newSubTotal = newSubTotal + payload;
            return {
                ...state,
                newSubTotal
            }
        case ADD_KDV:
            kdvTotal = kdvTotal + payload;
            return {
                ...state,
                kdvTotal
            }
        default:
            return state;
    }

}
