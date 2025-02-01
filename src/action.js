import { actionTypes } from './action.js'; // Ensure correct import path

export const addToCart = (product) => ({
    type: actionTypes.addToCart || "ADD_TO_CART", // Fallback in case of undefined
    payload: product,
});

export const removeFromCart = (product) => ({
    type: actionTypes.removeFromCart || "REMOVE_FROM_CART",
    payload: product
});

export const addItemQty = (product) => ({
    type: actionTypes.addItemQty || "ADD_ITEM_QTY",
    payload: product
});

export const removeItemQty = (product) => ({
    type: actionTypes.removeItemQty || "REMOVE_ITEM_QTY",
    payload: product
});

export const addWishlist = (product) => ({
    type: actionTypes.addWishlist || "ADD_TO_WISHLIST",
    payload: product
});
