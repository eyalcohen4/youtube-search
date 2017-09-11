<template>
  <div class="player" id="yt-player"></div>
</template>

<script>
import { mapGetters } from 'vuex';
import youtube from '../lib/youtube';

export default {
  name: 'player',
  created() {
    youtube.createPlayer();
  },
  mounted() {
    if (this.currentVideo && this.currentVideo.id) {
      youtube.playVideo(this.currentVideo.id.videoId);
    }
  },
  computed: {
    ...mapGetters([
      'currentVideo',
    ]),
  },
};
</script>

<style>

</style>
