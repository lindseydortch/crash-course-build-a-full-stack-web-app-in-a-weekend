import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nmcqwtefaydiiedhftff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tY3F3dGVmYXlkaWllZGhmdGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyNDI5NjIsImV4cCI6MjAzODgxODk2Mn0.RL-v84D-47P9g0YEVLKxwS-5saT2UT_J2rENhPz3E8M";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
