<template>
  <div id="app">
    <NavigationBar v-if="showNavigation" />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import { mapState } from "vuex";

export default {
  name: 'App',
  components: {
    NavigationBar
  },
  computed: {
    ...mapState({
      loading: state => state.auth.isLoading,
      authenticated: state => state.auth.isAuthenticated
    }),
    showNavigation() {
      return true;
    }
  },
  created() {
    this.$store.dispatch("auth/checkAuthentication");
  },
  updated() {
    // If loading authentication data is complete,
    // user is authenticated,
    // and user is trying to login again,
    // THEN redirect the user to the home page
    if (!this.loading && this.authenticated && this.$route.name === "Login") {
      this.$router.push({ name: "Home" });
    }
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
