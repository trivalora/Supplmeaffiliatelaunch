/**
 * Supabase Database Types
 * 
 * These types are generated from your Supabase database schema.
 * 
 * To regenerate after schema changes:
 * npx supabase gen types typescript --project-id <your-project-ref> > lib/supabase/types.ts
 * 
 * Or use the Supabase CLI:
 * npx supabase gen types typescript --local > lib/supabase/types.ts
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
          display_name: string
          subcategory: string | null
          description: string | null
          hero_description: string | null
          hero_image_url: string | null
          show_in_nav: boolean
          sort_order: number
          meta_title: string | null
          meta_description: string | null
          meta_keywords: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          name: string
          display_name: string
          subcategory?: string | null
          description?: string | null
          hero_description?: string | null
          hero_image_url?: string | null
          show_in_nav?: boolean
          sort_order?: number
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          display_name?: string
          subcategory?: string | null
          description?: string | null
          hero_description?: string | null
          hero_image_url?: string | null
          show_in_nav?: boolean
          sort_order?: number
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      retailers: {
        Row: {
          id: string
          slug: string
          name: string
          display_name: string
          logo_url: string | null
          website_url: string | null
          button_style: Json
          is_active: boolean
          is_affiliate: boolean
          priority: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          name: string
          display_name: string
          logo_url?: string | null
          website_url?: string | null
          button_style?: Json
          is_active?: boolean
          is_affiliate?: boolean
          priority?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          display_name?: string
          logo_url?: string | null
          website_url?: string | null
          button_style?: Json
          is_active?: boolean
          is_affiliate?: boolean
          priority?: number
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
          dsld_product_name: string | null
          dsld_brand: string | null
          serving_size: string | null
          servings_per_container: string | null
          net_quantity: string | null
          label_data: Json
          ingredients: Json
          product_image_url: string | null
          is_active: boolean
          third_party_tested: boolean
          certifications: string[]
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
          dsld_product_name?: string | null
          dsld_brand?: string | null
          serving_size?: string | null
          servings_per_container?: string | null
          net_quantity?: string | null
          label_data?: Json
          ingredients?: Json
          product_image_url?: string | null
          is_active?: boolean
          third_party_tested?: boolean
          certifications?: string[]
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
          dsld_product_name?: string | null
          dsld_brand?: string | null
          serving_size?: string | null
          servings_per_container?: string | null
          net_quantity?: string | null
          label_data?: Json
          ingredients?: Json
          product_image_url?: string | null
          is_active?: boolean
          third_party_tested?: boolean
          certifications?: string[]
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
          abbreviation: string | null
          pronunciation: string | null
          definition: string
          expanded_explanation: string | null
          why_it_matters: string | null
          simple_explanation: string | null
          technical_explanation: string | null
          real_world_context: string | null
          examples: string[]
          key_points: Json
          common_misconceptions: string[]
          related_terms: string[]
          meta_title: string | null
          meta_description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          term: string
          abbreviation?: string | null
          pronunciation?: string | null
          definition: string
          expanded_explanation?: string | null
          why_it_matters?: string | null
          simple_explanation?: string | null
          technical_explanation?: string | null
          real_world_context?: string | null
          examples?: string[]
          key_points?: Json
          common_misconceptions?: string[]
          related_terms?: string[]
          meta_title?: string | null
          meta_description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          term?: string
          abbreviation?: string | null
          pronunciation?: string | null
          definition?: string
          expanded_explanation?: string | null
          why_it_matters?: string | null
          simple_explanation?: string | null
          technical_explanation?: string | null
          real_world_context?: string | null
          examples?: string[]
          key_points?: Json
          common_misconceptions?: string[]
          related_terms?: string[]
          meta_title?: string | null
          meta_description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      product_details_view: {
        Row: {
          id: string
          dsld_id: string
          brand: string
          product_name: string
          display_name: string | null
          serving_size: string | null
          servings_per_container: string | null
          net_quantity: string | null
          label_data: Json
          ingredients: Json
          product_image_url: string | null
          third_party_tested: boolean
          certifications: string[]
          is_active: boolean
          supplement_slug: string
          supplement_name: string
          supplement_display_name: string
          subcategory: string | null
          prices: Json | null
          lowest_price: number | null
        }
      }
      supplement_summary_view: {
        Row: {
          id: string
          slug: string
          name: string
          display_name: string
          subcategory: string | null
          description: string | null
          hero_description: string | null
          hero_image_url: string | null
          show_in_nav: boolean
          sort_order: number
          meta_title: string | null
          meta_description: string | null
          meta_keywords: string[] | null
          created_at: string
          updated_at: string
          product_count: number
          min_price: number | null
          max_price: number | null
        }
      }
    }
    Functions: {
      get_products_by_supplement: {
        Args: {
          supplement_slug_param: string
          page_param?: number
          limit_param?: number
        }
        Returns: {
          product_id: string
          dsld_id: string
          brand: string
          product_name: string
          display_name: string | null
          serving_size: string | null
          third_party_tested: boolean
          certifications: string[]
          prices: Json
          lowest_price: number | null
          total_count: number
        }[]
      }
    }
  }
}
