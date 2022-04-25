import { ActionTree } from 'vuex';
import { database } from '../../../configurations/firebase';
import { FirebaseService } from '../../../services/firebase.service';
import { RequestsState, State, Request } from '../../../types';

const firebaseService = new FirebaseService(database);

export const requestsActions: ActionTree<RequestsState, State> = {
  async contactCoach({ commit }, request: Request) {
    commit('setLoading', true);
    try {
      const addedRequest = await firebaseService.addRequest(request);
      commit('appendRequest', addedRequest);
    } catch (error) {
      commit('setError', error);
    }
    commit('setLoading', false);
  },
  async fetchRequests({ commit }) {
    commit('setLoading', true);
    try {
      const requests = await firebaseService.getRequests();
      commit('setRequests', requests);
    } catch (error) {
      commit('setError', error);
    }
    commit('setLoading', false);
  },
};
