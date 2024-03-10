"use server";

import { createClient } from "@/lib/supabase/server";

export async function addProduct(formData) {
  const supabase = createClient();

  if (!formData) {
    throw new Error("No data provided");
  }

  try {
    const { data, error } = await supabase
      .schema("Eukami_v1")
      .from("Product")
      .insert({ ...formData })
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
