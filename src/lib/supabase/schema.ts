export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  Eukami_v1: {
    Tables: {
      Admin_User: {
        Row: {
          address: string
          created_at: string
          email: string
          firstName: string
          staff_ID: number
          surname: string
        }
        Insert: {
          address: string
          created_at?: string
          email: string
          firstName: string
          staff_ID?: number
          surname: string
        }
        Update: {
          address?: string
          created_at?: string
          email?: string
          firstName?: string
          staff_ID?: number
          surname?: string
        }
        Relationships: []
      }
      Bank_account: {
        Row: {
          account_number: string
          created_at: string
          customer_ID: number
          sort_code: string
        }
        Insert: {
          account_number: string
          created_at?: string
          customer_ID: number
          sort_code: string
        }
        Update: {
          account_number?: string
          created_at?: string
          customer_ID?: number
          sort_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "Eukami_v1_Bank_account_customer_ID_fkey"
            columns: ["customer_ID"]
            isOneToOne: true
            referencedRelation: "Customer"
            referencedColumns: ["Customer_id"]
          }
        ]
      }
      Collection: {
        Row: {
          created_at: string
          description: string | null
          id: number
          image: Json | null
          name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          image?: Json | null
          name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          image?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      Customer: {
        Row: {
          address: string
          created_at: string
          Customer_id: number
          email: string
          firstName: string
          lastName: string
        }
        Insert: {
          address: string
          created_at?: string
          Customer_id?: number
          email: string
          firstName: string
          lastName: string
        }
        Update: {
          address?: string
          created_at?: string
          Customer_id?: number
          email?: string
          firstName?: string
          lastName?: string
        }
        Relationships: []
      }
      Order: {
        Row: {
          billing_address: string
          created_at: string
          customer: number
          product: number
        }
        Insert: {
          billing_address: string
          created_at?: string
          customer: number
          product: number
        }
        Update: {
          billing_address?: string
          created_at?: string
          customer?: number
          product?: number
        }
        Relationships: [
          {
            foreignKeyName: "Eukami_v1_Orders_customer_ID_fkey"
            columns: ["customer"]
            isOneToOne: true
            referencedRelation: "Customer"
            referencedColumns: ["Customer_id"]
          },
          {
            foreignKeyName: "Eukami_v1_Orders_product_ID_fkey"
            columns: ["product"]
            isOneToOne: true
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
      Product: {
        Row: {
          availableForSale: boolean
          collection_id: number | null
          created_at: string
          description: string | null
          id: number
          name: string
          price: number
          salePrice: number | null
          skew: string | null
        }
        Insert: {
          availableForSale?: boolean
          collection_id?: number | null
          created_at?: string
          description?: string | null
          id?: number
          name: string
          price?: number
          salePrice?: number | null
          skew?: string | null
        }
        Update: {
          availableForSale?: boolean
          collection_id?: number | null
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          price?: number
          salePrice?: number | null
          skew?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Eukami_v1_Product_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "Collection"
            referencedColumns: ["id"]
          }
        ]
      }
      Product_Image: {
        Row: {
          created_at: string
          id: number
          image_url: Json | null
          product_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          image_url?: Json | null
          product_id: number
        }
        Update: {
          created_at?: string
          id?: number
          image_url?: Json | null
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Eukami_v1_Product_Image_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: true
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
      Product_Modification: {
        Row: {
          created_at: string
          product_ID: number
          staff_ID: number
        }
        Insert: {
          created_at?: string
          product_ID: number
          staff_ID: number
        }
        Update: {
          created_at?: string
          product_ID?: number
          staff_ID?: number
        }
        Relationships: [
          {
            foreignKeyName: "Eukami_v1_Product_Modification_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: true
            referencedRelation: "Product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Eukami_v1_Product_Modification_staff_ID_fkey"
            columns: ["staff_ID"]
            isOneToOne: true
            referencedRelation: "Admin_User"
            referencedColumns: ["staff_ID"]
          }
        ]
      }
      Review: {
        Row: {
          created_at: string
          customer_ID: number
          product_ID: number
          rating: number
        }
        Insert: {
          created_at?: string
          customer_ID: number
          product_ID: number
          rating: number
        }
        Update: {
          created_at?: string
          customer_ID?: number
          product_ID?: number
          rating?: number
        }
        Relationships: [
          {
            foreignKeyName: "Eukami_v1_Reviews_customer_ID_fkey"
            columns: ["customer_ID"]
            isOneToOne: true
            referencedRelation: "Customer"
            referencedColumns: ["Customer_id"]
          },
          {
            foreignKeyName: "Eukami_v1_Reviews_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: true
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
      Saved_Item: {
        Row: {
          created_at: string
          customer_ID: number
          product_ID: number
        }
        Insert: {
          created_at?: string
          customer_ID: number
          product_ID: number
        }
        Update: {
          created_at?: string
          customer_ID?: number
          product_ID?: number
        }
        Relationships: [
          {
            foreignKeyName: "Eukami_v1_Saved_Items_customer_ID_fkey"
            columns: ["customer_ID"]
            isOneToOne: true
            referencedRelation: "Customer"
            referencedColumns: ["Customer_id"]
          },
          {
            foreignKeyName: "Eukami_v1_Saved_Items_product_ID_fkey"
            columns: ["product_ID"]
            isOneToOne: true
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
