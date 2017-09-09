import Vue from 'vue';
import Vuex from 'vuex';
import youtube from '../lib/youtube';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    youtube: {
      currentVideo: {},
      videos: [],
      currentQuery: '',
    },
  },
  mutations: {
    search(state, query) {
      state.youtube.currentQuery = query;
      youtube.search(query).then((response) => {
        if (response) {
          state.youtube.videos = response.items;
          state.youtube.currentVideo = response.items[0];
        }
      }, (error) => {
        console.log(`Error: ${error}`);
      });
    },
    setCurrentVideo(state, video) {
      state.currentVideo = video;
    },
    play(state) {
      if (state.currentVideo.id.videoId) {
        youtube.playVideo(state.currentVideo.id.videoId);
      }
    },
  },
  actions: {
    search({ commit }, value) {
      commit('search', value);
    },
    playVideo({ commit }, value) {
      commit('setCurrentVideo', value);
      commit('play');
    },
  },
  getters: {
    videos: state => state.youtube.videos,
    currentVideo: state => state.youtube.currentVideo,
  },
});

export default store;
