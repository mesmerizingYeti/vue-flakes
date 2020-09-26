<template>
  <div id="app">
    <NavigationBar v-if="showNavigation" />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  computed: {
    showNavigation() {
      return true;
    }
  },
  created() {
    this.$store.dispatch("auth/checkAuthentication");
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #C9BFB0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}
</style>
