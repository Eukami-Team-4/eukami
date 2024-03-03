"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function signUp(formData) {
    const supabase = createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    try {
        const { error } = await supabase.auth.signUp(data);

        if (error) {
            throw new Error(error.message);
        }
    } catch (error) {
        throw error;
    }

    revalidatePath("/admin", "layout");
    redirect("/admin");
}
