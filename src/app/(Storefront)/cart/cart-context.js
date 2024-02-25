"use client";
import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext({
    lineItems: [],
});
export const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    return (
        <CartContext.Provider value={cart}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_PRODUCT":
            const existingProductIndex = state.lineItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingProductIndex >= 0) {
                // Product already exists in cart, increase quantity
                const lineItems = state.lineItems.map((item, index) => {
                    if (index !== existingProductIndex) {
                        return item;
                    }
                    return {
                        ...item,
                        quantity: item.quantity + action.payload.quantity,
                    };
                });
                return {
                    ...state,
                    lineItems,
                };
            } else {
                // Product is not in cart, add it
                return {
                    ...state,
                    lineItems: [...state.lineItems, action.payload],
                };
            }
        case "CHANGE_QUANTITY":
            return {
                ...state,
                lineItems: state.lineItems.map((item) =>
                    item.id === action.payload.productId
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                lineItems: state.lineItems.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case "CLEAR_CART":
            return {
                ...state,
                lineItems: [],
            };
        default:
            return state;
    }
}

const initialCart = {
    lineItems: [],
};

/**
 * Custom hook to access the cart state and dispatch
 * @returns {Object} cart and cartDispatch
 */
export function useCart() {
    return {
        cart: useContext(CartContext),
        dispatch: useContext(CartDispatchContext),
    };
}
