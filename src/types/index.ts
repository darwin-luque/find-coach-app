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

export interface Area {
  id: string;
  name: string;
  description: string;
  color: string;
  coaches: string[];
}

export interface Coach {
  id: string;
  name: string;
  description: string;
  contactInformation: ContactInformation;
  fee: Fee;
  areas: string[];
  areasData?: Area[];
  certified: boolean;
  isFavorite?: boolean;
  formattedFee?: string;
}

export interface CoachState {
  data$: Observable<Coach[]>;
  loading: boolean;
  error: string | null;
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
  id: number;
  email: string;
  message: string;
  coachId: string;
}

export interface RequestsState {
  data: Request[];
  loading: boolean;
  error: string | null;
}

export interface AreasState {
  data$: Observable<Area[]>;
  loading: boolean;
  error: string | null;
}

export interface State {
  // Check if making params optionals is needed
  coaches?: CoachState;
  areas?: AreasState;
  requests?: RequestsState;
}
