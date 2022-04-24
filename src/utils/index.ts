import { Observable } from 'rxjs';
import { Fee, FormField } from '../types';

export const promisifyObservable = <T>(observable: Observable<T>): Promise<T> => {
  return new Promise((resolve, reject) => {
    observable.subscribe({
      next: (value) => resolve(value),
      error: (error) => reject(error),
    });
  });
};

export const feeFormatter = (fee: Fee): string => {
  const { amount, currency, period } = fee;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });

  return `${formatter.format(amount)} / ${period}`;
};

export const validateFormField = ({ value, rules }: FormField) => {
  let output = true;

  if (rules.required) {
    output = output && value !== '';
  }
  if (rules.email) {
    output =
      typeof value === 'string'
        ? output && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        : false;
  }
  return output;
};
