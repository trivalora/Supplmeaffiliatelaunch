/**
 * Supabase Database Types
 * Generated types for the api schema
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  api: {
    Tables: {
      supplements: {
        Row: {
          id: string
          slug: string
          name: string
          display_name: string | null
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          name: string
          display_name?: string | null
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          display_name?: string | null
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          json_id: string
          dsld_id: string | null
          supplement_id: string
          brand: string
          product_name: string
          display_name: string | null
          product_image_url: string | null
          serving_size: string | null
          servings_per_container: string | null
          net_quantity: string | null
          is_active: boolean
          third_party_tested: boolean
          certifications: string[]
          supplement_slug: string
          unit: string | null
          amount_per_serving: number | null
          net_contents: string | null
          filters: string[]
          dsld_product_name: string | null
          dsld_brand: string | null
          dsld_content: string | null
          dsld_label_info: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          json_id: string
          dsld_id?: string | null
          supplement_id: string
          brand: string
          product_name: string
          display_name?: string | null
          product_image_url?: string | null
          serving_size?: string | null
          servings_per_container?: string | null
          net_quantity?: string | null
          is_active?: boolean
          third_party_tested?: boolean
          certifications?: string[]
          supplement_slug: string
          unit?: string | null
          amount_per_serving?: number | null
          net_contents?: string | null
          filters?: string[]
          dsld_product_name?: string | null
          dsld_brand?: string | null
          dsld_content?: string | null
          dsld_label_info?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          json_id?: string
          dsld_id?: string | null
          supplement_id?: string
          brand?: string
          product_name?: string
          display_name?: string | null
          product_image_url?: string | null
          serving_size?: string | null
          servings_per_container?: string | null
          net_quantity?: string | null
          is_active?: boolean
          third_party_tested?: boolean
          certifications?: string[]
          supplement_slug?: string
          unit?: string | null
          amount_per_serving?: number | null
          net_contents?: string | null
          filters?: string[]
          dsld_product_name?: string | null
          dsld_brand?: string | null
          dsld_content?: string | null
          dsld_label_info?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      retailers: {
        Row: {
          id: string
          slug: string
          name: string
          display_name: string | null
          logo_url: string | null
          website_url: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          name: string
          display_name?: string | null
          logo_url?: string | null
          website_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          display_name?: string | null
          logo_url?: string | null
          website_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      prices: {
        Row: {
          id: string
          product_id: string
          retailer_id: string
          price: number
          currency: string
          product_url: string
          affiliate_url: string | null
          in_stock: boolean
          last_checked_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          retailer_id: string
          price: number
          currency?: string
          product_url: string
          affiliate_url?: string | null
          in_stock?: boolean
          last_checked_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          retailer_id?: string
          price?: number
          currency?: string
          product_url?: string
          affiliate_url?: string | null
          in_stock?: boolean
          last_checked_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      glossary_terms: {
        Row: {
          id: string
          slug: string
          term: string
          definition: string
          category: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          term: string
          definition: string
          category?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          term?: string
          definition?: string
          category?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
