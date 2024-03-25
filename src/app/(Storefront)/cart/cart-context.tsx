"use client";
import * as React from "react";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { getInitialCartFromCookies, saveCartToCookies } from "./actions";
import { Product, ProductVariant } from "@/lib/supabase/schema";

export interface CartContext {
  cart: Cart;
  dispatch: React.Dispatch<ReducerDispatch>;
}

export interface ReducerDispatch {
  type: actionType;
  payload: CartItem;
}

export interface CartProviderProps {
  children: React.ReactNode;
}
export interface Cart {
  lineItems: CartItem[];
  total: number;
  customer_id?: string;
  checkoutUrl: string;
  id: number;
  totalQuantity: number;
}

export interface CartItem {
  id: number;
  quantity: number;
  title: string;
  product_variant: ProductVariant | Product;
  cart_id: number;
}

export type actionType =
  | "ADD_PRODUCT"
  | "CHANGE_PRODUCT"
  | "REMOVE_PRODUCT"
  | "CLEAR_CART"
  | "LOAD_CART";

const CartContext = createContext<CartContext | null>(null);

const CartProvider = (props: CartProviderProps): React.ReactElement => {
  // Attempt to read cookies to find current cart
  // If the user is logged out then we need to save their cart preferably in the cookies.
  // If they are logged in then we can save it in the database with their user_id
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  const initialRender = useRef(true);

  useEffect(() => {
    async function fetchData() {
      if (initialRender.current) {
        const savedCart = await getInitialCartFromCookies();
        dispatch({ type: "LOAD_CART", payload: savedCart });
        initialRender.current = false;
      } else {
        saveCartToCookies(cart);
      }
    }
    fetchData();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

function cartReducer(
  state: Cart,
  action: ReducerDispatch
) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const existingProductIndex = state.lineItems.findIndex((item) => {
        if (
          typeof action.payload === "object" &&
          "product_variant" in action.payload
        ) {
          return item.product_variant.id === action.payload.product_variant.id;
        }
        return false;
      });

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
    case "CHANGE_PRODUCT":
      return {
        ...state,
        lineItems: state.lineItems.map((item) =>
          item.id === action.payload.id
            ? action.payload
            : item
        ),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        lineItems: state.lineItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        lineItems: [],
      };
    case "LOAD_CART":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const initialCart: Cart = {
  lineItems: [],
  total: 0,
  checkoutUrl: "",
  id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
  totalQuantity: 0,
};

export function useCart() {
  if (!CartContext) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return useContext(CartContext);
}

export { CartContext, CartProvider };
