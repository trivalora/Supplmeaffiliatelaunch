export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  api: {
    Tables: {
      glossary_terms: {
        Row: {
          abbreviation: string | null
          common_misconceptions: string[] | null
          created_at: string | null
          definition: string
          examples: string[] | null
          expanded_explanation: string | null
          id: string
          key_points: Json | null
          meta_description: string | null
          meta_title: string | null
          pronunciation: string | null
          real_world_context: string | null
          related_terms: string[] | null
          simple_explanation: string | null
          slug: string
          technical_explanation: string | null
          term: string
          updated_at: string | null
          why_it_matters: string | null
        }
        Insert: {
          abbreviation?: string | null
          common_misconceptions?: string[] | null
          created_at?: string | null
          definition: string
          examples?: string[] | null
          expanded_explanation?: string | null
          id?: string
          key_points?: Json | null
          meta_description?: string | null
          meta_title?: string | null
          pronunciation?: string | null
          real_world_context?: string | null
          related_terms?: string[] | null
          simple_explanation?: string | null
          slug: string
          technical_explanation?: string | null
          term: string
          updated_at?: string | null
          why_it_matters?: string | null
        }
        Update: {
          abbreviation?: string | null
          common_misconceptions?: string[] | null
          created_at?: string | null
          definition?: string
          examples?: string[] | null
          expanded_explanation?: string | null
          id?: string
          key_points?: Json | null
          meta_description?: string | null
          meta_title?: string | null
          pronunciation?: string | null
          real_world_context?: string | null
          related_terms?: string[] | null
          simple_explanation?: string | null
          slug?: string
          technical_explanation?: string | null
          term?: string
          updated_at?: string | null
          why_it_matters?: string | null
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          confirmation_token: string | null
          confirmed: boolean | null
          created_at: string | null
          email: string
          id: string
          ip_address: string | null
          metadata: Json | null
          source: string
          status: string
          subscribed_at: string | null
          unsubscribed_at: string | null
          updated_at: string | null
          user_agent: string | null
        }
        Insert: {
          confirmation_token?: string | null
          confirmed?: boolean | null
          created_at?: string | null
          email: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          source?: string
          status?: string
          subscribed_at?: string | null
          unsubscribed_at?: string | null
          updated_at?: string | null
          user_agent?: string | null
        }
        Update: {
          confirmation_token?: string | null
          confirmed?: boolean | null
          created_at?: string | null
          email?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          source?: string
          status?: string
          subscribed_at?: string | null
          unsubscribed_at?: string | null
          updated_at?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      partner_leads: {
        Row: {
          category: string
          contacted_at: string | null
          created_at: string | null
          email: string
          id: string
          ip_address: string | null
          message: string | null
          metadata: Json | null
          name: string
          network: string
          notes: string | null
          priority: string | null
          responded_at: string | null
          status: string
          updated_at: string | null
          user_agent: string | null
        }
        Insert: {
          category: string
          contacted_at?: string | null
          created_at?: string | null
          email: string
          id?: string
          ip_address?: string | null
          message?: string | null
          metadata?: Json | null
          name: string
          network: string
          notes?: string | null
          priority?: string | null
          responded_at?: string | null
          status?: string
          updated_at?: string | null
          user_agent?: string | null
        }
        Update: {
          category?: string
          contacted_at?: string | null
          created_at?: string | null
          email?: string
          id?: string
          ip_address?: string | null
          message?: string | null
          metadata?: Json | null
          name?: string
          network?: string
          notes?: string | null
          priority?: string | null
          responded_at?: string | null
          status?: string
          updated_at?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      prices: {
        Row: {
          affiliate_url: string | null
          created_at: string | null
          currency: string | null
          id: string
          in_stock: boolean | null
          last_checked_at: string | null
          price: number
          product_id: string | null
          product_url: string
          retailer_id: string | null
          updated_at: string | null
        }
        Insert: {
          affiliate_url?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          in_stock?: boolean | null
          last_checked_at?: string | null
          price: number
          product_id?: string | null
          product_url: string
          retailer_id?: string | null
          updated_at?: string | null
        }
        Update: {
          affiliate_url?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          in_stock?: boolean | null
          last_checked_at?: string | null
          price?: number
          product_id?: string | null
          product_url?: string
          retailer_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product_comparison_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prices_retailer_id_fkey"
            columns: ["retailer_id"]
            isOneToOne: false
            referencedRelation: "retailers"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          amount_per_serving: number | null
          brand: string
          certifications: string[] | null
          created_at: string | null
          display_name: string | null
          dsld_brand: string | null
          dsld_id: string | null
          dsld_product_name: string | null
          filters: string[] | null
          id: string
          ingredients: Json | null
          is_active: boolean | null
          json_id: string
          label_data: Json | null
          net_contents: string | null
          net_quantity: string | null
          product_image_url: string | null
          product_name: string
          serving_size: string | null
          servings_per_container: string | null
          supplement_id: string | null
          supplement_slug: string
          third_party_tested: boolean | null
          unit: string | null
          updated_at: string | null
        }
        Insert: {
          amount_per_serving?: number | null
          brand: string
          certifications?: string[] | null
          created_at?: string | null
          display_name?: string | null
          dsld_brand?: string | null
          dsld_id?: string | null
          dsld_product_name?: string | null
          filters?: string[] | null
          id?: string
          ingredients?: Json | null
          is_active?: boolean | null
          json_id: string
          label_data?: Json | null
          net_contents?: string | null
          net_quantity?: string | null
          product_image_url?: string | null
          product_name: string
          serving_size?: string | null
          servings_per_container?: string | null
          supplement_id?: string | null
          supplement_slug: string
          third_party_tested?: boolean | null
          unit?: string | null
          updated_at?: string | null
        }
        Update: {
          amount_per_serving?: number | null
          brand?: string
          certifications?: string[] | null
          created_at?: string | null
          display_name?: string | null
          dsld_brand?: string | null
          dsld_id?: string | null
          dsld_product_name?: string | null
          filters?: string[] | null
          id?: string
          ingredients?: Json | null
          is_active?: boolean | null
          json_id?: string
          label_data?: Json | null
          net_contents?: string | null
          net_quantity?: string | null
          product_image_url?: string | null
          product_name?: string
          serving_size?: string | null
          servings_per_container?: string | null
          supplement_id?: string | null
          supplement_slug?: string
          third_party_tested?: boolean | null
          unit?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_supplement_id_fkey"
            columns: ["supplement_id"]
            isOneToOne: false
            referencedRelation: "supplement_summary_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_supplement_id_fkey"
            columns: ["supplement_id"]
            isOneToOne: false
            referencedRelation: "supplements"
            referencedColumns: ["id"]
          },
        ]
      }
      retailers: {
        Row: {
          button_style: Json | null
          created_at: string | null
          display_name: string
          id: string
          is_active: boolean | null
          is_affiliate: boolean | null
          logo_url: string | null
          name: string
          priority: number | null
          slug: string
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          button_style?: Json | null
          created_at?: string | null
          display_name: string
          id?: string
          is_active?: boolean | null
          is_affiliate?: boolean | null
          logo_url?: string | null
          name: string
          priority?: number | null
          slug: string
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          button_style?: Json | null
          created_at?: string | null
          display_name?: string
          id?: string
          is_active?: boolean | null
          is_affiliate?: boolean | null
          logo_url?: string | null
          name?: string
          priority?: number | null
          slug?: string
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      supplements: {
        Row: {
          created_at: string | null
          description: string | null
          display_name: string
          hero_description: string | null
          hero_image_url: string | null
          id: string
          meta_description: string | null
          meta_keywords: string[] | null
          meta_title: string | null
          name: string
          show_in_nav: boolean | null
          slug: string
          sort_order: number | null
          subcategory: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_name: string
          hero_description?: string | null
          hero_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string[] | null
          meta_title?: string | null
          name: string
          show_in_nav?: boolean | null
          slug: string
          sort_order?: number | null
          subcategory?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_name?: string
          hero_description?: string | null
          hero_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_keywords?: string[] | null
          meta_title?: string | null
          name?: string
          show_in_nav?: boolean | null
          slug?: string
          sort_order?: number | null
          subcategory?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      product_comparison_view: {
        Row: {
          amount_per_serving: number | null
          available_retailers: number | null
          best_price_per_unit: number | null
          best_total_price: number | null
          brand: string | null
          certifications: string[] | null
          dsld_brand: string | null
          dsld_id: string | null
          dsld_product_name: string | null
          filters: string[] | null
          id: string | null
          is_active: boolean | null
          json_id: string | null
          net_contents: string | null
          product_image_url: string | null
          product_name: string | null
          retailer_prices: Json | null
          serving_size: string | null
          servings_per_container: string | null
          supplement_id: string | null
          supplement_slug: string | null
          third_party_tested: boolean | null
          unit: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_supplement_id_fkey"
            columns: ["supplement_id"]
            isOneToOne: false
            referencedRelation: "supplement_summary_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_supplement_id_fkey"
            columns: ["supplement_id"]
            isOneToOne: false
            referencedRelation: "supplements"
            referencedColumns: ["id"]
          },
        ]
      }
      supplement_summary_view: {
        Row: {
          avg_price: number | null
          created_at: string | null
          description: string | null
          display_name: string | null
          hero_description: string | null
          hero_image_url: string | null
          id: string | null
          max_price: number | null
          meta_description: string | null
          meta_keywords: string[] | null
          meta_title: string | null
          min_price: number | null
          name: string | null
          product_count: number | null
          show_in_nav: boolean | null
          slug: string | null
          sort_order: number | null
          subcategory: string | null
          updated_at: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  api: {
    Enums: {},
  },
} as const
