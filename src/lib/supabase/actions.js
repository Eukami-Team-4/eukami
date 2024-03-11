"use server";

import { createClient } from "@/lib/supabase/server";

export async function getProducts() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Product")
      .select('*, collection: collection_id (name)');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function addProduct(formData) {
  const supabase = createClient();

  if (!formData) {
    throw new Error("No data provided");
  }

  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Product")
      .upsert({ ...formData })
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error("Failed to create product:", error);
    throw error;
  }
}

export async function deleteProduct(productId) {
  const supabase = createClient();

  if (!productId) {
    throw new Error("No product ID provided");
  }

  try {
    console.log("Deleting product", productId);
    const { error } = await supabase
      .schema("Eukami_v1")
      .from("Product")
      .delete()
      .eq('id', productId);

    if (error) {
      throw new Error(error.message);
    }
    console.log("Deleted product", productId);
    return true;
  } catch (error) {
    console.error("Failed to delete product:", error);
    throw error;
  }
}

export async function getCollections() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Collection")
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch collections:", error);
    throw error;
  }
}

export async function getOrders() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Order")
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    throw error;
  }
}

export async function getCustomers() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Customer")
      .select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch customers:", error);
    throw error;
  }
}
