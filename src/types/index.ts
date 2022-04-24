import { Observable } from 'rxjs';

export type Currency = 'USD';
export type Period = 'hour' | 'day' | 'week';

export interface Fee {
  amount: number;
  currency: Currency;
  period: Period;
}

export interface ContactInformation {
  email: string;
  phone: string;
}

export interface Coach {
  id: string;
  name: string;
  description: string;
  contactInformation: ContactInformation;
  fee: Fee;
  areas: string[];
  certified: boolean;
  isFavorite?: boolean;
  formattedFee?: string;
}

export interface CoachState {
  data$: Observable<Coach[]>;
  loading: boolean;
  error: string | null;
}

export interface State {
  coaches?: CoachState; // Chack if this is needed
}

export interface FormRules {
  required?: boolean;
  email?: boolean;
}

export interface FormField {
  value: string | number | boolean;
  rules: FormRules;
  touched: boolean;
  valid: boolean;
}

export interface Request {
  email: string;
  message: string;
  coachId: string;
}

export interface RequestsState {
  data: Request[];
  loading: boolean;
  error: string | null;
}
