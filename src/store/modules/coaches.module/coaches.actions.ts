import { BehaviorSubject } from 'rxjs';
import { ActionTree } from 'vuex';
import { axios$ } from '../../../services/custom-axios';
import { Coach, CoachState, State } from '../../../types';

export const coachesActions: ActionTree<CoachState, State> = {
  async fetchCoaches({ commit }) {
    commit('setLoading', true);
    const rawCoaches$ = new BehaviorSubject<Coach[]>([]);
    axios$
      .get<Coach[]>(process.env.VUE_APP_COACHES_URL)
      .then(({ data }) => {
        rawCoaches$.next(data);
        commit('setCoaches', rawCoaches$);
      })
      .catch((error) => commit('setError', error));
  },
};
