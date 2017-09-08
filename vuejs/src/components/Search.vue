<template>
  <input type="text" v-model="query" @keydown="search">
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
      console.log(this.$store);
      this.$store.dispatch('query', this.query);
    },
  },
};
</script>

<style>

</style>
