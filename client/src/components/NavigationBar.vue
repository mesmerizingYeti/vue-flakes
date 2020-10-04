<template>
  <div class="nav">
    <div class="left-nav">
      <p class="logo">Vue Flakes</p>
      <router-link class="links" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="links" :to="{ name: 'Flakes'}">Flakes</router-link>
      <router-link class="links" :to="{ name: 'Events' }">Events</router-link>
    </div>
    <div class="right-nav">
      <a href="/auth/logout">Logout</a>
      <a
        class="links repo"
        href="https://github.com/mesmerizingYeti/vue-flakes"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
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
  background-color: #2b292f;
  color: #bfbec0;
  border-bottom: 1px solid white;
}
.left-nav {
  display: flex;
  align-items: center;
}
.logo {
  font-weight: bold;
  font-size: 2rem;
  color: #bfbec0;
  margin: 5px 15px 5px 0;
}
.links {
  color: #bfbec0;
  text-decoration: none;
  margin-left: 15px;
}
.links:hover {
  color: #fcfffa;
  text-decoration: underline;
}
.excuses-link-active,
.router-link-exact-active {
  color: #c69060;
  text-decoration: underline;
  font-weight: bold;
}
.repo {
  color: #bfbec0;
  text-decoration: none;
  font-size: 2rem;
  margin-right: 15px;
}
</style>
