import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    "https://lhixxxlbwvukfcrmhdkl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoaXh4eGxid3Z1a2Zjcm1oZGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczMzAwMDMsImV4cCI6MTk5MjkwNjAwM30.qZq-qAqt3JQ87aFkImFtbW6TtipVBnArBpVMgS1h1EY"
);
