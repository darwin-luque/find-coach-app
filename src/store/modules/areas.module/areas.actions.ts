import { BehaviorSubject } from 'rxjs';
import { ActionTree } from 'vuex';
import { axios$ } from '../../../services/custom-axios';
import { Area, AreasState, State } from '../../../types';

export const areasActions: ActionTree<AreasState, State> = {
  async fetchAreas({ commit, dispatch }) {
    commit('setLoading', true);
    const rawAreas$ = new BehaviorSubject<Area[]>([]);
    axios$
      .get(`${process.env.VUE_APP_API_URL}/areas`)
      .then(({ data }) => {
        rawAreas$.next(data);
        commit('setAreas', rawAreas$);
        dispatch('coaches/fetchCoaches', null, { root: true });
      })
      .catch((error) => commit('setError', error));
  },
};
