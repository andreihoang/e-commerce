
import { createContext, useState, useEffect, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if (existingItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }


    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if (existingItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== existingItem.id)
    } 
    if (existingItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem)
    }
}

const clearItem = (cartItems, itemClear) => {
    return cartItems.filter(cartItem => cartItem.id !== itemClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    setCartItems: () => null,
    addItemToCart: () => null,
    cartCount: 0,
    setCartCount: () => null,
    removeItemFromCart: () => null,
    clearItemFromCard: () => null,
    total: 0,
    setTotal: () => null,
})

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
};

const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
    }
} 

export const CartProvider = ({children}) => {
    const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

        const newCartTotal = newCartItems.reduce((total, cartItem) => {
            return total + (cartItem.price * cartItem.quantity);
        }, 0)

        dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: {
            cartItems: newCartItems,
            cartCount: newCartCount,
            cartTotal:  newCartTotal
        }})
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems)
       
    };
    const removeItemFromCart = (productToAdd) => {
        const newCartItems = removeCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems)   
    };

    const clearItemFromCard = (itemClear) => {
        const newCartItems = clearItem(cartItems, itemClear);
        updateCartItemsReducer(newCartItems)
    }

    const setIsCartOpen = (bool) => {
        dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool})
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCard, cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}