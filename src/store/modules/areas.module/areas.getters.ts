import { GetterTree } from 'vuex';
import { AreasState, State } from '../../../types';

export const areasGetters: GetterTree<AreasState, State> = {
  areas$(state) {
    return state.data$;
  },
  getLoading(state) {
    return state.loading;
  },
  getError(state) {
    return state.error;
  },
};
