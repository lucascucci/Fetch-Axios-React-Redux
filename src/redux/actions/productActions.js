
import {
    ActionTypes
} from '../constants/action-types';


export const setProducts = (product) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: product,
    };
};



export const selectedProduc = (product) => {
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};










