import { GetterTree } from 'vuex';
import { AreasState, State } from '../../../types';

export const areasGetters: GetterTree<AreasState, State> = {
  getAreas(state) {
    return state.data$;
  },
  getLoading(state) {
    return state.loading;
  },
  getError(state) {
    return state.error;
  },
};
