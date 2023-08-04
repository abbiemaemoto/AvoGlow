import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
// import { SUPABASE_URL, SUPABASE_KEY} from './.env.js'


const supabaseUrl = "https://hxyeilwvnurbuwsqdhtf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4eWVpbHd2bnVyYnV3c3FkaHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwMjYxNzUsImV4cCI6MTk5NDYwMjE3NX0.wXgjGQ2x_7yBI_qPjwuNI09__CFic02VqQwkLxVE4Yc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});