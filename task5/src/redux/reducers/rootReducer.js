import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import cartReducer from "./CartReducer";

const rootReducer = combineReducers({
    productSatae: productReducer,
    cartState: cartReducer
});

export default rootReducer;