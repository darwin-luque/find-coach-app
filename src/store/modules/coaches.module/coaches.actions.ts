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
