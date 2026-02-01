import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bhybovexusgvrfatjskk.supabase.co'
const supabaseAnonKey = 'sb_publishable_nQ-1kqE8XYubW6w6W30j0g_MAKIahU4'
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
