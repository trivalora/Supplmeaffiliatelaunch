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
      affiliate_clicks: {
        Row: {
          affiliate_url: string
          brand: string | null
          click_id: string
          clicked_at: string | null
          commission_amount: number | null
          commission_currency: string | null
          commission_status: string | null
          commissioned_at: string | null
          currency: string | null
          event_id: string | null
          id: string
          landing_page: string | null
          order_id: string | null
          pages_before_click: number | null
          price: number | null
          price_per_unit: number | null
          product_id: string | null
          product_name: string | null
          retailer_id: string | null
          retailer_slug: string
          sale_amount: number | null
          session_id: string | null
          supplement_slug: string | null
          time_on_site_seconds: number | null
          utm_campaign: string | null
          utm_source: string | null
          visitor_id: string | null
        }
        Insert: {
          affiliate_url: string
          brand?: string | null
          click_id: string
          clicked_at?: string | null
          commission_amount?: number | null
          commission_currency?: string | null
          commission_status?: string | null
          commissioned_at?: string | null
          currency?: string | null
          event_id?: string | null
          id?: string
          landing_page?: string | null
          order_id?: string | null
          pages_before_click?: number | null
          price?: number | null
          price_per_unit?: number | null
          product_id?: string | null
          product_name?: string | null
          retailer_id?: string | null
          retailer_slug: string
          sale_amount?: number | null
          session_id?: string | null
          supplement_slug?: string | null
          time_on_site_seconds?: number | null
          utm_campaign?: string | null
          utm_source?: string | null
          visitor_id?: string | null
        }
        Update: {
          affiliate_url?: string
          brand?: string | null
          click_id?: string
          clicked_at?: string | null
          commission_amount?: number | null
          commission_currency?: string | null
          commission_status?: string | null
          commissioned_at?: string | null
          currency?: string | null
          event_id?: string | null
          id?: string
          landing_page?: string | null
          order_id?: string | null
          pages_before_click?: number | null
          price?: number | null
          price_per_unit?: number | null
          product_id?: string | null
          product_name?: string | null
          retailer_id?: string | null
          retailer_slug?: string
          sale_amount?: number | null
          session_id?: string | null
          supplement_slug?: string | null
          time_on_site_seconds?: number | null
          utm_campaign?: string | null
          utm_source?: string | null
          visitor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_clicks_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "analytics_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_clicks_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product_comparison_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_clicks_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "affiliate_clicks_retailer_id_fkey"
            columns: ["retailer_id"]
            isOneToOne: false
            referencedRelation: "retailers"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_events: {
        Row: {
          browser: string | null
          created_at: string | null
          currency: string | null
          device_type: string | null
          event_category: string
          event_data: Json | null
          event_name: string
          id: string
          ip_hash: string | null
          is_bot: boolean | null
          os: string | null
          page_path: string | null
          page_url: string | null
          processed_at: string | null
          referrer: string | null
          revenue_value: number | null
          screen_resolution: string | null
          session_id: string | null
          source: string | null
          user_agent: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
          viewport_size: string | null
          visitor_id: string | null
        }
        Insert: {
          browser?: string | null
          created_at?: string | null
          currency?: string | null
          device_type?: string | null
          event_category?: string
          event_data?: Json | null
          event_name: string
          id?: string
          ip_hash?: string | null
          is_bot?: boolean | null
          os?: string | null
          page_path?: string | null
          page_url?: string | null
          processed_at?: string | null
          referrer?: string | null
          revenue_value?: number | null
          screen_resolution?: string | null
          session_id?: string | null
          source?: string | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
          viewport_size?: string | null
          visitor_id?: string | null
        }
        Update: {
          browser?: string | null
          created_at?: string | null
          currency?: string | null
          device_type?: string | null
          event_category?: string
          event_data?: Json | null
          event_name?: string
          id?: string
          ip_hash?: string | null
          is_bot?: boolean | null
          os?: string | null
          page_path?: string | null
          page_url?: string | null
          processed_at?: string | null
          referrer?: string | null
          revenue_value?: number | null
          screen_resolution?: string | null
          session_id?: string | null
          source?: string | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
          viewport_size?: string | null
          visitor_id?: string | null
        }
        Relationships: []
      }
      api_requests: {
        Row: {
          cache_hit: boolean | null
          created_at: string | null
          endpoint: string
          id: string
          ip_hash: string | null
          is_bot: boolean | null
          method: string
          query_params: Json | null
          referer: string | null
          request_id: string | null
          resource_id: string | null
          resource_type: string | null
          response_time_ms: number | null
          status_code: number | null
          user_agent: string | null
        }
        Insert: {
          cache_hit?: boolean | null
          created_at?: string | null
          endpoint: string
          id?: string
          ip_hash?: string | null
          is_bot?: boolean | null
          method?: string
          query_params?: Json | null
          referer?: string | null
          request_id?: string | null
          resource_id?: string | null
          resource_type?: string | null
          response_time_ms?: number | null
          status_code?: number | null
          user_agent?: string | null
        }
        Update: {
          cache_hit?: boolean | null
          created_at?: string | null
          endpoint?: string
          id?: string
          ip_hash?: string | null
          is_bot?: boolean | null
          method?: string
          query_params?: Json | null
          referer?: string | null
          request_id?: string | null
          resource_id?: string | null
          resource_type?: string | null
          response_time_ms?: number | null
          status_code?: number | null
          user_agent?: string | null
        }
        Relationships: []
      }
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
          confirmed_at: string | null
          created_at: string | null
          email: string
          id: string
          ip_address: string | null
          metadata: Json | null
          source: string
          status: string
          subscribed_at: string | null
          token_expires_at: string | null
          unsubscribed_at: string | null
          updated_at: string | null
          user_agent: string | null
        }
        Insert: {
          confirmation_token?: string | null
          confirmed?: boolean | null
          confirmed_at?: string | null
          created_at?: string | null
          email: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          source?: string
          status?: string
          subscribed_at?: string | null
          token_expires_at?: string | null
          unsubscribed_at?: string | null
          updated_at?: string | null
          user_agent?: string | null
        }
        Update: {
          confirmation_token?: string | null
          confirmed?: boolean | null
          confirmed_at?: string | null
          created_at?: string | null
          email?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          source?: string
          status?: string
          subscribed_at?: string | null
          token_expires_at?: string | null
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
          dsld_content: string | null
          dsld_id: string | null
          dsld_label_info: Json | null
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
          dsld_content?: string | null
          dsld_id?: string | null
          dsld_label_info?: Json | null
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
          dsld_content?: string | null
          dsld_id?: string | null
          dsld_label_info?: Json | null
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
      refill_reminders: {
        Row: {
          clicked_at: string | null
          confirmation_token: string | null
          confirmed: boolean | null
          confirmed_at: string | null
          created_at: string | null
          email: string
          estimated_days_supply: number
          estimated_runout_date: string
          id: string
          ip_address: string | null
          is_recurring: boolean | null
          metadata: Json | null
          product_brand: string
          product_id: string
          product_name: string
          product_url: string | null
          purchase_date: string
          recurrence_count: number | null
          reminder_date: string
          reminder_days_before: number
          reminder_sent_at: string | null
          retailer_name: string | null
          servings_per_container: number
          servings_per_day: number
          status: string
          supplement_slug: string
          token_expires_at: string | null
          updated_at: string | null
          user_agent: string | null
        }
        Insert: {
          clicked_at?: string | null
          confirmation_token?: string | null
          confirmed?: boolean | null
          confirmed_at?: string | null
          created_at?: string | null
          email: string
          estimated_days_supply: number
          estimated_runout_date: string
          id?: string
          ip_address?: string | null
          is_recurring?: boolean | null
          metadata?: Json | null
          product_brand: string
          product_id: string
          product_name: string
          product_url?: string | null
          purchase_date?: string
          recurrence_count?: number | null
          reminder_date: string
          reminder_days_before?: number
          reminder_sent_at?: string | null
          retailer_name?: string | null
          servings_per_container: number
          servings_per_day?: number
          status?: string
          supplement_slug: string
          token_expires_at?: string | null
          updated_at?: string | null
          user_agent?: string | null
        }
        Update: {
          clicked_at?: string | null
          confirmation_token?: string | null
          confirmed?: boolean | null
          confirmed_at?: string | null
          created_at?: string | null
          email?: string
          estimated_days_supply?: number
          estimated_runout_date?: string
          id?: string
          ip_address?: string | null
          is_recurring?: boolean | null
          metadata?: Json | null
          product_brand?: string
          product_id?: string
          product_name?: string
          product_url?: string | null
          purchase_date?: string
          recurrence_count?: number | null
          reminder_date?: string
          reminder_days_before?: number
          reminder_sent_at?: string | null
          retailer_name?: string | null
          servings_per_container?: number
          servings_per_day?: number
          status?: string
          supplement_slug?: string
          token_expires_at?: string | null
          updated_at?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "refill_reminders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product_comparison_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "refill_reminders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
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
          additional_overview_content: string | null
          buying_guide_intro: string | null
          buying_guide_items: Json | null
          created_at: string | null
          description: string | null
          display_name: string
          extended_overview: string | null
          form_notes: Json | null
          hero_description: string | null
          hero_image_url: string | null
          id: string
          ideal_for: string[] | null
          key_benefits: string[] | null
          meta_description: string | null
          meta_keywords: string[] | null
          meta_title: string | null
          name: string
          overview_content: string | null
          quality_markers: string[] | null
          quick_overview: string | null
          safety_considerations: string[] | null
          science_snapshot: string | null
          show_in_nav: boolean | null
          slug: string
          sort_order: number | null
          subcategory: string | null
          synergy_notes: string | null
          timing_tips: string[] | null
          typical_dosage_max: number | null
          typical_dosage_min: number | null
          typical_dosage_unit: string | null
          updated_at: string | null
          what_to_expect: Json | null
          what_to_expect_summary: string[] | null
        }
        Insert: {
          additional_overview_content?: string | null
          buying_guide_intro?: string | null
          buying_guide_items?: Json | null
          created_at?: string | null
          description?: string | null
          display_name: string
          extended_overview?: string | null
          form_notes?: Json | null
          hero_description?: string | null
          hero_image_url?: string | null
          id?: string
          ideal_for?: string[] | null
          key_benefits?: string[] | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          meta_title?: string | null
          name: string
          overview_content?: string | null
          quality_markers?: string[] | null
          quick_overview?: string | null
          safety_considerations?: string[] | null
          science_snapshot?: string | null
          show_in_nav?: boolean | null
          slug: string
          sort_order?: number | null
          subcategory?: string | null
          synergy_notes?: string | null
          timing_tips?: string[] | null
          typical_dosage_max?: number | null
          typical_dosage_min?: number | null
          typical_dosage_unit?: string | null
          updated_at?: string | null
          what_to_expect?: Json | null
          what_to_expect_summary?: string[] | null
        }
        Update: {
          additional_overview_content?: string | null
          buying_guide_intro?: string | null
          buying_guide_items?: Json | null
          created_at?: string | null
          description?: string | null
          display_name?: string
          extended_overview?: string | null
          form_notes?: Json | null
          hero_description?: string | null
          hero_image_url?: string | null
          id?: string
          ideal_for?: string[] | null
          key_benefits?: string[] | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          meta_title?: string | null
          name?: string
          overview_content?: string | null
          quality_markers?: string[] | null
          quick_overview?: string | null
          safety_considerations?: string[] | null
          science_snapshot?: string | null
          show_in_nav?: boolean | null
          slug?: string
          sort_order?: number | null
          subcategory?: string | null
          synergy_notes?: string | null
          timing_tips?: string[] | null
          typical_dosage_max?: number | null
          typical_dosage_min?: number | null
          typical_dosage_unit?: string | null
          updated_at?: string | null
          what_to_expect?: Json | null
          what_to_expect_summary?: string[] | null
        }
        Relationships: []
      }
      waitlist_signups: {
        Row: {
          confirmation_token: string | null
          confirmed: boolean | null
          confirmed_at: string | null
          converted_at: string | null
          created_at: string | null
          email: string
          id: string
          interest: string | null
          invited_at: string | null
          ip_address: string | null
          metadata: Json | null
          name: string | null
          priority_level: string | null
          referral_source: string | null
          signed_up_at: string | null
          source: string
          status: string
          token_expires_at: string | null
          updated_at: string | null
          user_agent: string | null
          wants_newsletter: boolean | null
        }
        Insert: {
          confirmation_token?: string | null
          confirmed?: boolean | null
          confirmed_at?: string | null
          converted_at?: string | null
          created_at?: string | null
          email: string
          id?: string
          interest?: string | null
          invited_at?: string | null
          ip_address?: string | null
          metadata?: Json | null
          name?: string | null
          priority_level?: string | null
          referral_source?: string | null
          signed_up_at?: string | null
          source?: string
          status?: string
          token_expires_at?: string | null
          updated_at?: string | null
          user_agent?: string | null
          wants_newsletter?: boolean | null
        }
        Update: {
          confirmation_token?: string | null
          confirmed?: boolean | null
          confirmed_at?: string | null
          converted_at?: string | null
          created_at?: string | null
          email?: string
          id?: string
          interest?: string | null
          invited_at?: string | null
          ip_address?: string | null
          metadata?: Json | null
          name?: string | null
          priority_level?: string | null
          referral_source?: string | null
          signed_up_at?: string | null
          source?: string
          status?: string
          token_expires_at?: string | null
          updated_at?: string | null
          user_agent?: string | null
          wants_newsletter?: boolean | null
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
      session_stats: {
        Row: {
          affiliate_clicks: number | null
          browser: string | null
          clicked_affiliate: boolean | null
          device_type: string | null
          duration_seconds: number | null
          first_referrer: string | null
          landing_page: string | null
          max_scroll_depth: number | null
          page_views: number | null
          product_interactions: number | null
          search_count: number | null
          session_end: string | null
          session_id: string | null
          session_start: string | null
          unique_pages: number | null
          utm_campaign: string | null
          utm_source: string | null
          viewed_comparison: boolean | null
          viewed_homepage: boolean | null
          viewed_product: boolean | null
          viewed_supplement: boolean | null
          visitor_id: string | null
        }
        Relationships: []
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
      get_analytics_summary: {
        Args: { end_date?: string; start_date?: string }
        Returns: Json
      }
      refresh_session_stats: { Args: never; Returns: undefined }
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
