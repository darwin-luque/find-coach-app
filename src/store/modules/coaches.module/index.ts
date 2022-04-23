import { BehaviorSubject } from 'rxjs';
import { Module } from 'vuex';
import { Coach, CoachState, State } from '../../../types';
import { coachesActions as actions } from './coaches.actions';
import { coachesGetters as getters } from './coaches.getters';
import { coachesMutations as mutations } from './coaches.mutations';

export const coachesModule: Module<CoachState, State> = {
  state() {
    return {
      data$: new BehaviorSubject<Coach[]>([]),
      loading: false,
      error: null,
    };
  },
  mutations,
  getters,
  actions,
  namespaced: true,
};
