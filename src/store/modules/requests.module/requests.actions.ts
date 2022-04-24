import { ActionTree } from 'vuex';
import { axios$ } from '../../../services/custom-axios';
import { RequestsState, State, Request } from '../../../types';

export const requestsActions: ActionTree<RequestsState, State> = {
  async contactCoach({ commit }, request: Request) {
    commit('setLoading', true);
    try {
      await axios$.post(`${process.env.VUE_APP_API_URL}/requests`, request);
      commit('appendRequest', request);
    } catch (error) {
      commit('setError', error);
    }
    commit('setLoading', false);
  },
  async fetchRequests({ commit }) {
    commit('setLoading', true);
    try {
      const { data } = await axios$.get<Request[]>(
        `${process.env.VUE_APP_API_URL}/requests`,
      );
      commit('setRequests', data);
    } catch (error) {
      commit('setError', error);
    }
    commit('setLoading', false);
  },
};
