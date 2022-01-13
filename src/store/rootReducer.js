import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import cartStateReducer from "./reducers/cartStateReducer";
import productReducer from "./reducers/productReducer";
import resultReducer from "./reducers/resultReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    productList: productReducer,
    cartState:cartStateReducer,
    result: resultReducer,
})

export default rootReducer;