import { BehaviorSubject, combineLatestWith, map, Observable } from 'rxjs';
import { MutationTree } from 'vuex';
import { Area, Coach, CoachState } from '../../../types';
import { feeFormatter } from '../../../utils';

export const coachesMutations: MutationTree<CoachState> = {
  setCoaches(
    state,
    payload: { rawCoaches$: Observable<Coach[]>; areas$?: Observable<Area[]> },
  ) {
    const favorites$ = new BehaviorSubject(
      JSON.parse(localStorage.getItem('favorites') ?? '[]'),
    );

    state.data$ = payload.rawCoaches$.pipe(
      combineLatestWith(favorites$),
      combineLatestWith(payload.areas$ ?? new BehaviorSubject<Area[]>([])),
      map(([[coaches, favorites], areas]) =>
        coaches.map((coach) => ({
          ...coach,
          formattedFee: feeFormatter(coach.fee),
          isFavorite: favorites.includes(coach.id),
          areasData: areas.filter((area) => coach.areas.includes(area.id)),
        })),
      ),
    );
    state.loading = false;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setError(state, error) {
    state.error = error;
    state.loading = false;
  },
};
