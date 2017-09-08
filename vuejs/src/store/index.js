import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    youtube: {
      currentVideo: {},
      videos: [],
      currentQuery: '',
    },
    mutations: {
      query(state, query) {
        state.youtube.currentQuery = query;
      },
    },
    actions: {
      query({ commit }, value) {
        commit('query', value);
      },
    },
  },
});

export default store;
