export type Currency = 'USD';
export type Period = 'hour' | 'day' | 'week';

export interface Coach {
  id: string;
  name: string;
  description: string;
  contactInformation: ContactInformation;
  fee: Fee;
  areas: string[];
  certified: boolean;
}

export interface Fee {
  amount: string;
  currency: Currency;
  period: Period;
}

export interface ContactInformation {
  email: string;
  phone: string;
}

export interface CoachState {
  data: Coach[];
  loading: boolean;
  error: string | null;
}

export interface State {}
