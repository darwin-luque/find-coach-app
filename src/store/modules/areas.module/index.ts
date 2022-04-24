import { BehaviorSubject } from 'rxjs';
import { Module } from 'vuex';
import { Area, AreasState, State } from '../../../types';
import { areasActions as actions } from './areas.actions';
import { areasGetters as getters } from './areas.getters';
import { areasMutations as mutations } from './areas.mutations';

export const areasModule: Module<AreasState, State> = {
  state() {
    return {
      data$: new BehaviorSubject<Area[]>([]),
      loading: false,
      error: null,
    };
  },
  actions,
  getters,
  mutations,
  namespaced: true,
};
