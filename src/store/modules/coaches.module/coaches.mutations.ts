import { BehaviorSubject, combineLatestWith, map, Observable } from 'rxjs';
import { MutationTree } from 'vuex';
import { Coach, CoachState } from '../../../types';

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
          isFavorite: favorites.includes(coach.id),
        })),
      ),
    );
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setError(state, error) {
    state.error = error;
  },
};
