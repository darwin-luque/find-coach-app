import { createStore } from 'vuex';
import { areasModule } from './modules/areas.module';
import { coachesModule } from './modules/coaches.module';
import { requestsModule } from './modules/requests.module';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchData({ dispatch }) {
      dispatch('areas/fetchAreas');
      dispatch('requests/fetchRequests');
    },
  },
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    areas: areasModule,
  },
});
