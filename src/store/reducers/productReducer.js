import { productList } from "../initialValues/product";

const initialState = {
    productList: productList
}

export default function productReducer(state = initialState) {
    return{
        ...state
    }

}