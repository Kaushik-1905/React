import React from 'react';

const initialState = {
    cartItems: []
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const exist = state.cartItems.find(
                (item) => item.id === action.paylode.id
            );
            if (exist) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.paylode.id ? { ...item, qty: item.qty + 1 }
                            : item)
                }
            }

            return {
                ...state,
                cart: [...state.cart, { ...action.paylode, qty: 0 }]
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.paylode
                )
            }
    }
};

export default CartReducer;