
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gcsfdbwtnkaxmpumcwyl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjc2ZkYnd0bmtheG1wdW1jd3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MzEwMTMsImV4cCI6MjA2NDEwNzAxM30.U8du6TLe5NkZVyaBCSolTnna-fY4K3OAdaPVzHu12x0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
