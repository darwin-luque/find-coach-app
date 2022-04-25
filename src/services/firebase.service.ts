import {
  Database,
  DataSnapshot,
  onValue as _onValue,
  Query,
  ref,
  update,
} from 'firebase/database';
import { Area, Coach, Request } from '../types';

const onValue = (query: Query) =>
  new Promise<DataSnapshot>((res, rej) => {
    _onValue(
      query,
      (snapshot) => res(snapshot),
      (error) => rej(error),
    );
  });

export class FirebaseService {
  constructor(private readonly database: Database) {}

  private async add<T extends object>(data: T, path: string): Promise<T> {
    await update(ref(this.database, path), data);
    return data;
  }

  private async get<T extends object>(path: string): Promise<T> {
    const dataSnapshot = await onValue(ref(this.database, path));

    return dataSnapshot.val();
  }

  addCoach(coach: Coach): Promise<Coach> {
    return this.add(coach, 'coaches');
  }

  getCoaches(): Promise<Coach[]> {
    return this.get('coaches');
  }

  addArea(area: Area): Promise<Area> {
    return this.add(area, 'areas');
  }

  getAreas(): Promise<Area[]> {
    return this.get('areas');
  }

  addRequest(request: Request): Promise<Request> {
    return this.add(request, 'requests');
  }

  getRequests(): Promise<Request[]> {
    return this.get('requests');
  }
}
