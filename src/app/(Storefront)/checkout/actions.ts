"use server";
import { Checkout } from "@/lib/supabase/schema";
import { createClient } from "@/lib/supabase/server";
import { v4 as uuidv4 } from "uuid";
import { Cart } from "../cart/cart-context";

export async function createNewCheckout(cart: Cart) {
  if (!cart || cart.lineItems.length === 0) {
    return;
  }
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Checkout")
      .insert({
        lineItems: cart.lineItems,
        totalPrice: cart.total,
        checkoutUrl: cart.checkoutUrl || uuidv4(),
      })
      .select();

    if (error) {
      throw new Error(error.message);
    }
    return data as unknown as Checkout;
  } catch (error) {
    console.error("Failed to insert into Database:", error);
  }
}

export async function getExistingCheckout(checkoutUrl: string) {
    if (!checkoutUrl) {
        return;
    }
    const supabase = createClient();
    try {
        const { data, error } = await supabase
        .schema("Eukami_v1")
        .from("Checkout")
        .select()
        .eq("checkoutUrl", checkoutUrl);
    
        if (error) {
        throw new Error(error.message);
        }
        return data as unknown as Checkout;
    } catch (error) {
        console.error("Failed to fetch from Database:", error);
    }
}
