import axios from "axios";

import * as actionTypes from '../constants/productConstant';

export const getProducts = () => async(dispatch) =>{
    try{
        let { data } = await axios.get(`/api/products`);
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload:data});

    }catch(err){
        console.log(`Error while calling the api`,err.message);
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:err.message});
    }
}

export const getProductDetails = (id) => async(dispatch) =>{
    try{
        dispatch({ type:actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        
        let  { data } = await axios.get(`/api/product/${id}`);
        
        dispatch({ type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    }catch(err){
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL,payload:err.message});
    }
}