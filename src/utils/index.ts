import { Observable } from 'rxjs';

export const promisifyObservable = <T>(observable: Observable<T>): Promise<T> => {
  return new Promise((resolve, reject) => {
    observable.subscribe({
      next: (value) => resolve(value),
      error: (error) => reject(error),
    });
  });
};
