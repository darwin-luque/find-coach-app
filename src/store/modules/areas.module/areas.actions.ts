import { BehaviorSubject } from 'rxjs';
import { ActionTree } from 'vuex';
import { database } from '../../../configurations/firebase';
import { FirebaseService } from '../../../services/firebase.service';
import { Area, AreasState, State } from '../../../types';

const firebaseService = new FirebaseService(database);

export const areasActions: ActionTree<AreasState, State> = {
  async fetchAreas({ commit, dispatch }) {
    commit('setLoading', true);
    const rawAreas$ = new BehaviorSubject<Area[]>([]);
    try {
      const areas = await firebaseService.getAreas();
      rawAreas$.next(areas);
      commit('setAreas', rawAreas$);
      dispatch('coaches/fetchCoaches', null, { root: true });
    } catch (error) {
      commit('setError', error);
    }
  },
};
