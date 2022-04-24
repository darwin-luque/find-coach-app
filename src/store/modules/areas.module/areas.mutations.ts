import { Observable } from 'rxjs';
import { MutationTree } from 'vuex';
import { AreasState, Area } from '../../../types';

export const areasMutations: MutationTree<AreasState> = {
  setAreas(state, areas: Observable<Area[]>) {
    state.data$ = areas;
  },
  setLoading(state, loading: boolean) {
    state.loading = loading;
  },
  setError(state, error: string) {
    state.error = error;
  },
};
