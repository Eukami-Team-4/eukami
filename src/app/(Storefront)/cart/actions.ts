import { createClient } from "@/lib/supabase/client";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { Cart } from "./cart-context";

export function saveCartToCookies(cart: Cart): void {
  const parsedCart: string = JSON.stringify(cart);
  Cookies.set("cart", parsedCart, { expires: 7 });
}

export async function getInitialCartFromCookies(): Promise<Cart> {
  const cart = Cookies.get("cart");

  if (!cart) {
    return {
      lineItems: [],
      total: 0,
      checkoutUrl: uuidv4(),
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      totalQuantity: 0,
    };
  }
  return JSON.parse(cart);
}

export async function generateNewCart(): Promise<Cart> {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Cart")
      .insert({
        id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
        checkoutUrl: uuidv4(),
      })
      .select();

    if (error) {
      throw new Error(error.message);
    }
    console.log("New Cart Created:", data);
    return {
      lineItems: [],
      total: 0,
      checkoutUrl: (data as unknown as Cart).checkoutUrl,
      id: (data as unknown as Cart).id,
      totalQuantity: 0,
    };
  } catch (error) {
    console.error("Failed to insert into Database:", error);
    return {
      lineItems: [],
      total: 0,
      checkoutUrl: uuidv4(),
      id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
      totalQuantity: 0,
    };
  }
}
