import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export type Game = {
  id: number
  name: string
  slug: string
  description?: string
  created_at: string
}

export type Seed = {
  id: number
  game_id: number
  seed_code: string
  description: string
  tags: string[]
  created_at: string
  image_url?: string
  submitter_id?: string
  rating?: number
  saves: number
}

export type User = {
  id: string
  email: string
  username: string
  created_at: string
} 