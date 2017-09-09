<template>
  <div class="video-item" v-on:click="play">

  <img class="video-item__image" :src="item.snippet.thumbnails.default.url">

  <div class="video-item__content">
    <p class="video-item__content__title"> {{ item.snippet.title }} </p>

    <div class="video-item__content__subtitle">
      <span class="video-item__content__subtitle__channel"> {{ item.snippet.channelTitle }}</span>
      <span class="video-item__content__subtitle__date"> {{ date }} </span>
    </div>
  </div>

  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'video-item',
    props: ['item'],
    methods: {
      play: function play() {
        this.$store.dispatch('playVideo', this.item);
      },
    },
    computed: {
      date: function date() {
        return moment(this.item.snippet.publishedAt).fromNow();
      },
    },
  };
</script>

<style>

</style>
