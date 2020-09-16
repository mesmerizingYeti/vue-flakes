<template>
  <div class="nav">
    <p class="logo">
      Vue Flakes
    </p>
    <router-link class="links" to="/">Home</router-link>
    <router-link class="links" to="/excuses">Excuses</router-link>
    <router-link class="links" to="/events">Events</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  position: sticky;
  padding: 20px;
  background-color: seagreen;
  color: white;
  border-bottom: 1px solid white;
}
.logo {
  font-weight: bold;
  font-size: 3rem;
  color: white;
  margin-right: 10px;
}
.links {
  color: white;
  font-size: 2rem;
  text-decoration: none;
  margin-left: 10px;
}
</style>