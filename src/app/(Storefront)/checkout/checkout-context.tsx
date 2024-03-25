"use client";
import { Checkout } from "@/lib/supabase/schema";
import * as React from "react";
import { createContext, useContext, useRef } from "react";
import { Cart } from "../cart/cart-context";
import {
  createNewCheckout,
  getExistingCheckout,
  updateExistingCheckout,
} from "./actions";
import { toast } from "sonner";

export interface CheckoutContext {
  checkout: Checkout;
  setCheckout: React.Dispatch<React.SetStateAction<Checkout>>;
  handleCheckout: (cart: Cart) => Promise<void>;
  getNewCheckout: (cart: Cart) => Promise<void>;
}
const CheckoutContext = createContext<CheckoutContext | null>(null);

export interface CheckoutProviderProps {
  children: React.ReactNode;
}

const CheckoutProvider = (props: CheckoutProviderProps): React.ReactElement => {
  const [checkout, setCheckout] = React.useState(null as unknown as Checkout);
  const initialRender = useRef(true);

    React.useEffect(() => {
      async function updateDB() {
        if (initialRender.current) {
          initialRender.current = false;
        } else {
          updateExistingCheckout(checkout);
        }
      }
      updateDB();
    }, [checkout]);

  async function getNewCheckout(cart: Cart) {
    try {
      const checkout = await createNewCheckout(cart);
      if (!checkout) {
        toast.error("Failed to create checkout from the current cart items");
        return;
      }
      setCheckout(checkout);
    } catch (error) {
      toast.error("Failed to create checkout");
      return;
    }
  }
  async function handleCheckout(cart: Cart) {
    if (cart.checkoutUrl) {
      const existingCheckout = await getExistingCheckout(cart.checkoutUrl);
      if (existingCheckout) {
        try {
          const updatedCheckout = await updateExistingCheckout({
            ...existingCheckout,
            lineItems: cart.lineItems,
            totalPrice: cart.total,
          });
          if (!updatedCheckout) {
            await getNewCheckout(cart);
            return;
          }
          setCheckout(updatedCheckout);
          return;
        } catch (error) {
          toast.error("Failed to update existing checkout");
          return;
        }
      }
    }
    await getNewCheckout(cart);
  }

  function clearCheckout() {
    setCheckout(null as unknown as Checkout);
  }

  return (
    <CheckoutContext.Provider value={{ checkout, setCheckout, handleCheckout, getNewCheckout }}>
      {props.children}
    </CheckoutContext.Provider>
  );
};

export function useCheckout() {
  if (!CheckoutContext) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return useContext(CheckoutContext);
}

export { CheckoutContext, CheckoutProvider };
