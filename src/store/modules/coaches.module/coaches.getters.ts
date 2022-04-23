import { Observable } from 'rxjs';
import { GetterTree } from 'vuex';
import { CoachState, State, Coach } from '../../../types';

export const coachesGetters: GetterTree<CoachState, State> = {
  coaches$(state): Observable<Coach[]> {
    return state.data$;
  },
};
