

export const ADD_SUBTOTAL ="ADD_SUBTOTAL"
export const ADD_KDV ="ADD_KDV"

export function addSubTotal(price) {
    return {
        type: ADD_SUBTOTAL,
        payload: price
    }
}
export function addKDV(price) {
    return {
        type: ADD_KDV,
        payload: price
    }
}