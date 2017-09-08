<template>
  <div id="app">
    <header>
      <search></search>
    </header>

    <main></main>

    <footer></footer>
  </div>
</template>

<script>

import Search from './components/Search';

export default {
  name: 'app',
  components: {
    search: Search,
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
  margin-top: 60px;
}
</style>
