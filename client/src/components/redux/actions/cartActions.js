
import axios from 'axios';
import * as actionType from '../constants/cartConstant';


export const addToCart = (id,quantity) => async(dispatch) => {
    try{
           const { data } = await axios.get(`/api/product/${id}`) ;

           dispatch({type:actionType.ADD_TO_CART, payload:{...data,quantity}});
    }catch(err){
        dispatch({type:actionType.ADD_TO_CART_ERROR, payload:err.message})
    }
}

export const removeFromCart = (id) =>(dispatch) =>{
    dispatch({type:actionType.REMOVE_FROM_CART, payload:id});
}

export const getOrderDetails = (data) =>(dispatch) =>{
    dispatch({type:actionType.GET_ORDER_DETAILS, payload:data})
}