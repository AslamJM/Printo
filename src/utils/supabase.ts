import { createClient } from "@supabase/supabase-js";
import { Database } from "@/supabase";

const getEnv = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error("no supabase url");
  }
  if (!supabaseKey) {
    throw new Error("no supabase key");
  }
  return {
    supabaseUrl,
    supabaseKey,
  };
};

export const supabaseAdmin = createClient<Database>(
  getEnv().supabaseUrl,
  getEnv().supabaseKey
);
