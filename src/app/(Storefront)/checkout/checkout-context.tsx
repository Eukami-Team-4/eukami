"use client";
import { Checkout } from "@/lib/supabase/schema";
import * as React from "react";
import { createContext, useContext, useRef } from "react";
import { toast } from "sonner";
import { Cart } from "../cart/cart-context";
import {
  createNewCheckout,
  getExistingCheckout,
  updateExistingCheckout,
} from "./actions";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface CheckoutContext {
  checkout: Checkout;
  setCheckout: React.Dispatch<React.SetStateAction<Checkout>>;
  handleCheckout: (cart: Cart) => Promise<Checkout | null>;
  getNewCheckout: (cart: Cart) => Promise<Checkout | null>;
  form: ReturnType<typeof useForm>;
  deliveryMethod: {
    label: string;
    value: string;
    price: number;
  };
  setDeliveryMethod: React.Dispatch<
    React.SetStateAction<{
      label: string;
      value: string;
      price: number;
    }>
  >;
}
const CheckoutContext = createContext<CheckoutContext | null>(null);

export interface CheckoutProviderProps {
  children: React.ReactNode;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
  deliveryMethod: z.string(),
  cardName: z.string(),
  cardNumber: z.string(),
  cardExpiry: z.string(),
  cardCvc: z.string(),
});

const CheckoutProvider = (props: CheckoutProviderProps): React.ReactElement => {
  const [checkout, setCheckout] = React.useState(null as unknown as Checkout);
  const [deliveryMethod, setDeliveryMethod] = React.useState({
    label: 'Standard Delivery',
    value: 'standard',
    price: 4.99
});
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
        return null;
      }
      setCheckout(checkout);
      return checkout;
    } catch (error) {
      toast.error("Failed to create checkout");
      return null;
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
            return await getNewCheckout(cart);
          }
          setCheckout(updatedCheckout);
          return updatedCheckout;
        } catch (error) {
          toast.error("Failed to update existing checkout");
          return null;
        }
      }
    }
    return await getNewCheckout(cart);
  }

  function clearCheckout() {
    setCheckout(null as unknown as Checkout);
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        deliveryMethod: "standard",
        cardName: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
    },
});

  return (
    <CheckoutContext.Provider
      value={{ checkout, setCheckout, handleCheckout, getNewCheckout, form, deliveryMethod, setDeliveryMethod }}
    >
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
