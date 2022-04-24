import { GetterTree } from 'vuex';
import { RequestsState, State } from '../../../types';

export const requestsGetters: GetterTree<RequestsState, State> = {
  getRequests(state) {
    return state.data;
  },
  getLoading(state) {
    return state.loading;
  },
  getError(state) {
    return state.error;
  },
};
