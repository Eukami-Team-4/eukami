"use client";
import { createContext, useContext, useReducer } from "react";



/**
 * Context for the cart state
 * @type {React.Context<{lineItems: []}>}
 */
export const CartContext = createContext({
    lineItems: [],
});

/**
 * Context for the cart dispatch function
 * @type {React.Context<function>}
 */
export const CartDispatchContext = createContext(null);

/**
 * Provider component for the cart state and dispatch function
 * @param {Object} props - The props object
 * @param {React.ReactNode} props.children - The children nodes
 * @returns {React.Element} The provider component
 */
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

/**
 * Reducer function for the cart state
 * @param {Object} state - The current state
 * @param {Object} action - The action object
 * @param {string} action.type - The action type
 * @param {Object} action.payload - The action payload
 * @returns {Object} The new state
 */
function cartReducer(state, action) {
    console.log("action", action)
    console.log('payload', action.payload)
    switch (action.type) {
        case "ADD_PRODUCT":
            const existingProductIndex = state.lineItems.findIndex(
                (item) => item.id === action.payload.product.id
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

/**
 * Initial state for the cart
 * @type {Object}
 */
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
