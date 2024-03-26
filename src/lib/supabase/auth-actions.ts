"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function login(formData: { email: string; password: string }) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.auth.signInWithPassword(formData);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw error;
  } finally {
    revalidatePath("/", "layout");
  }
}

export async function signup(formData: { email: string; password: string }) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.auth.signUp(formData);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw error;
  } finally {
    revalidatePath("/", "layout");
  }
}

export async function signout() {
  const supabase = createClient();
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw error;
  }
  revalidatePath("/", "layout");
}

export async function forgotPassword(email: string) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      "user@email.com"
    );
    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw error;
  }
}
