<template>
  <div class="search">
    <input type="text" class="search__input" v-model="query" @keydown="search">
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.query);
    },
  },
};
</script>

<style>

</style>
