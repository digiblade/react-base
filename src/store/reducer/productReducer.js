import { ActionTypes } from "../contants/action-types"
const initialState = {
    product:[
        {
            id:1,
            product:"akash",
            category:"programmer"
        }
    ]
}
 const productReducer = (state = initialState, {type , payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCT:
            return state
        default:
            return state
    }
}
export default productReducer