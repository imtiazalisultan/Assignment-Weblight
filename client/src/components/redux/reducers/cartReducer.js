
import * as actionType from '../constants/cartConstant';

export const cartReducer = (state = { cartItems :[], orderDetails:{} }, action) =>{
        switch(action.type){
            
            case actionType.ADD_TO_CART :{

                const item = action.payload;

                
                // console.log(item.id);   
                const exist = state.cartItems.find(product => product.id === item.id);

               // console.log(exist);

                if(exist){
                   // console.log(state.cartItems[0].product);
                    return { ...state, cartItems: state.cartItems.map(data=> data.id === exist.id ? item : data )};
                }else{
                    
                    return { ...state, cartItems: [...state.cartItems, item] };
                }
            } 

            case actionType.REMOVE_FROM_CART:
                return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload )}

            case actionType.GET_ORDER_DETAILS:
                const order = action.payload;
                return { ...state, orderDetails:{...state.orderDetails,order}}    

            default :
                return state; 
        }
}