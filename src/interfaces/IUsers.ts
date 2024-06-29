export interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface IFormUsers {
  name: string;
  email: string;
  password?: string;
  role?: string;
}