import { combineReducers } from "redux";
import  productReducer  from "./productReducer";
debugger
 const reducer = combineReducers({
     
    allProducts:productReducer
})
export default reducer