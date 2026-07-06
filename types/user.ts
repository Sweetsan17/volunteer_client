export interface Role {
  id: number
  name: string
  created_at?: string
}

export interface User {
  id: number
  username?: string
  email: string
  role_id?: number
  role?: Role
  created_at?: string
}
