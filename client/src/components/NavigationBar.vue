<template>
  <div class="nav">
    <div class="left-nav">
      <p class="logo">Vue Flakes</p>
      <router-link class="links" to="/">Home</router-link>
      <router-link class="links" to="/excuses">Excuses</router-link>
      <router-link class="links" to="/events">Events</router-link>
    </div>
    <a class="links repo" href="https://github.com/mesmerizingYeti/vue-flakes">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  padding: 10px;
  background-color: #2B292F;
  color: #BFBEC0;
  border-bottom: 1px solid white;
}
.left-nav {
  display: flex;
  align-items: center;
}
.logo {
  font-weight: bold;
  font-size: 2rem;
  color: #BFBEC0;
  margin: 5px 15px 5px 0;
}
.links {
  color: #BFBEC0;
  text-decoration: none;
  margin-left: 15px;
}
.links:hover {
  color: #FCFFFA;
  text-decoration: underline;
}
.router-link-exact-active {
  color: #977E73;
  text-decoration: underline;
  font-weight: bold;
}
.repo {
  color: #BFBEC0;
  text-decoration: none;
  font-size: 2rem;
  margin-right: 15px;
}
</style>
