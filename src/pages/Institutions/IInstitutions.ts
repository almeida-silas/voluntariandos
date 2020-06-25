export interface IInstitution {
  id: number;
  full_name: string;
  email: string;
  imageProfile?: string;
  bio?: string;
  ein: string;
}

export interface IRequirements {
  id?: number;
  title: string;
  description: string;
  content: string;
  created_at: Date;
  was_suplied?: boolean;
  institution: IInstitution;
}
