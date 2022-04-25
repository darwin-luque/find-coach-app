import { BehaviorSubject } from 'rxjs';
import { ActionTree } from 'vuex';
import { database } from '../../../configurations/firebase';
import { FirebaseService } from '../../../services/firebase.service';
import { Coach, CoachState, State } from '../../../types';

const firebaseSevice = new FirebaseService(database);

export const coachesActions: ActionTree<CoachState, State> = {
  async fetchCoaches({ commit, rootState }) {
    commit('setLoading', true);
    const rawCoaches$ = new BehaviorSubject<Coach[]>([]);
    try {
      const coaches = await firebaseSevice.getCoaches();
      rawCoaches$.next(coaches);
      commit('setCoaches', { rawCoaches$, areas$: rootState.areas?.data$ });
    } catch (error) {
      commit('setError', error);
    }
  },
  async toggleCoachFavorite({ commit, state }, coach: Coach) {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as string[];
    if (favorites.includes(coach.id)) {
      localStorage.setItem(
        'favorites',
        JSON.stringify(favorites.filter((id) => id !== coach.id)),
      );
    } else {
      favorites.push(coach.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    commit('setCoaches', state.data$);
  },
};
