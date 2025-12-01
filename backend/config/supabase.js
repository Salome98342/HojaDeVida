import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'placeholder-key';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.warn('⚠️  Supabase credentials not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY in .env file');
  console.warn('⚠️  The application will run but database operations will fail until configured.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

