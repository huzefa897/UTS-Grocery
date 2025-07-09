import { createClient } from '@supabase/supabase-js';

// Replace these with your actual values
const supabaseUrl = 'https://ijkfttcyozhvulvpnmbr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqa2Z0dGN5b3podnVsdnBubWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3MzQ0NjMsImV4cCI6MjA2MTMxMDQ2M30.ACyFUSOYvdPj4hy887HxT5XFzRnluTw7Jo3z9ZSWYyg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
