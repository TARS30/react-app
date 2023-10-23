
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dxerbuknlkpmsaetnvwj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZXJidWtubGtwbXNhZXRudndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4OTI2OTEsImV4cCI6MjAwNjQ2ODY5MX0.mjTEPTZ3ntrJvTSR_YvSW1BFp2iED11ne0XulWEc1_c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;



