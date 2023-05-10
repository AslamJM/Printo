export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      orders: {
        Row: {
          address: string | null
          category: string | null
          created_at: string | null
          id: number
          images: string[] | null
          paymentId: string | null
          status: string | null
          userId: string | null
        }
        Insert: {
          address?: string | null
          category?: string | null
          created_at?: string | null
          id?: number
          images?: string[] | null
          paymentId?: string | null
          status?: string | null
          userId?: string | null
        }
        Update: {
          address?: string | null
          category?: string | null
          created_at?: string | null
          id?: number
          images?: string[] | null
          paymentId?: string | null
          status?: string | null
          userId?: string | null
        }
      }
      Showcase: {
        Row: {
          date: string | null
          id: number
          imageSrc: string | null
          name: string | null
        }
        Insert: {
          date?: string | null
          id?: number
          imageSrc?: string | null
          name?: string | null
        }
        Update: {
          date?: string | null
          id?: number
          imageSrc?: string | null
          name?: string | null
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
