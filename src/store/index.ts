import { createStore } from 'vuex';
import { coachesModule } from './modules/coaches.module';
import { requestsModule } from './modules/requests.module';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
});
