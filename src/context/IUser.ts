export interface IAuthUser {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  image: string;
  full_name: string;
  email: string;
  password: string;
  whatsapp: string;
  ssn: string;
  ein: string;
  is_active: boolean;
  is_juridical: boolean;
}
