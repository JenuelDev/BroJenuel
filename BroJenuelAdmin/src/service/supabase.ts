import router from "@/router";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export async function isLogged() {
    const { error } = await supabase.auth.getUser();
    if (error) router.push("/");
}
