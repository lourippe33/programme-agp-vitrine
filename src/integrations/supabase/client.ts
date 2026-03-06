import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let supabase: SupabaseClient<Database> | null = null;

if (SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY) {
    supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
          auth: {
                  storage: localStorage,
                  persistSession: true,
                  autoRefreshToken: true,
          },
    });
}

export { supabase };
          }
    })
}