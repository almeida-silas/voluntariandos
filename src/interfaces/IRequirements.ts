import { IInstitution } from './IInstitutions';

export interface IRequirements {
  id?: number;
  title: string;
  description: string;
  content: string;
  created_at: Date;
  was_suplied?: boolean;
  institution: IInstitution;
}
