<template>
  <div id="app">
    <header>
      <search></search>
    </header>

    <main>
      <div class="app__player">
        <player class="app__player"></player>
      </div>
      <div class="app__video-list">
        <video-list></video-list>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>

import Player from './components/Player';
import Search from './components/Search';
import VideoList from './components/Video-List';

export default {
  name: 'app',
  components: {
    search: Search,
    videoList: VideoList,
    player: Player,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
