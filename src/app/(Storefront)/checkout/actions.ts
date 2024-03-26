"use server";
import { Checkout, Customer, Order } from "@/lib/supabase/schema";
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
      .select()
      .limit(1)
      .single();

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
      .eq("checkoutUrl", checkoutUrl)
      .limit(1)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data as unknown as Checkout;
  } catch (error) {
    console.error("Failed to fetch from Database:", error);
  }
}

export async function updateExistingCheckout(checkout: Checkout) {
  if (!checkout) {
    return;
  }
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Checkout")
      .upsert(checkout)
      .eq("checkoutUrl", checkout.checkoutUrl)
      .select()
      .limit(1)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data as unknown as Checkout;
  } catch (error) {
    console.error("Failed to update Database:", error);
  }
}

export async function createNewOrder(order: Order) {
  if (!order) {
    return;
  }
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Order")
      .insert(order)
      .select()
      .limit(1)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data as unknown as Order;
  } catch (error) {
    console.error("Failed to insert into Database:", error);
  }
}

export async function createNewCustomer(customer: Customer) {
  if (!customer) {
    return;
  }
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Customer")
      .upsert(customer)
      .eq("email", customer.email)
      .select()
      .limit(1)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data as unknown as any;
  } catch (error) {
    console.error("Failed to insert into Database:", error);
  }
}
