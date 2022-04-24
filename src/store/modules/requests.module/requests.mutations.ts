import { MutationTree } from 'vuex';
import { RequestsState, Request } from '../../../types';

export const requestsMutations: MutationTree<RequestsState> = {
  setLoading(state, loading: boolean) {
    state.loading = loading;
  },
  setError(state, error: string | null) {
    state.error = error;
  },
  appendRequest(state, request: Request) {
    state.data.push(request);
  },
};
