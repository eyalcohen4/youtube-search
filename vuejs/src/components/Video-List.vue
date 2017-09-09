<template>
  <ul class="video-list">
    <li v-for="video in videos" :key="video.id.videoId">
      <video-item :item="video"></video-item>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';

import VideoItem from './Video-Item';

export default {
  name: 'video-list',
  components: {
    videoItem: VideoItem,
  },
  computed: {
    ...mapGetters([
      'videos',
    ]),
  },
};
</script>

<style>

</style>
