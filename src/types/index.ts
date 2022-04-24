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
