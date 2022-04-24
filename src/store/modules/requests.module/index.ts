import { Module } from 'vuex';
import { RequestsState, State } from '../../../types';
import { requestsActions as actions } from './requests.actions';
import { requestsGetters as getters } from './requests.getters';
import { requestsMutations as mutations } from './requests.mutations';

export const requestsModule: Module<RequestsState, State> = {
  state() {
    return {
      data: [],
      loading: false,
      error: null,
    };
  },
  mutations,
  getters,
  actions,
  namespaced: true,
};
