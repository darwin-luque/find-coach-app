import { BehaviorSubject, combineLatestWith, map, Observable } from 'rxjs';
import { MutationTree } from 'vuex';
import { Coach, CoachState } from '../../../types';
import { feeFormatter } from '../../../utils';

export const coachesMutations: MutationTree<CoachState> = {
  setCoaches(state, coaches$: Observable<Coach[]>) {
    const favorites$ = new BehaviorSubject(
      JSON.parse(localStorage.getItem('favorites') ?? '[]'),
    );

    state.data$ = coaches$.pipe(
      combineLatestWith(favorites$),
      map(([coaches, favorites]) =>
        coaches.map((coach) => ({
          ...coach,
          formattedFee: feeFormatter(coach.fee),
          isFavorite: favorites.includes(coach.id),
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
