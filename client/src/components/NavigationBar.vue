<template>
  <div class="nav">
    <div class="left-nav">
      <p class="logo">Vue Flakes</p>
      <router-link class="links" to="/">Home</router-link>
      <div v-html="excusesLink"></div>
      <router-link class="links" to="/events">Events</router-link>
    </div>
    <a class="links repo" href="https://github.com/mesmerizingYeti/vue-flakes">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    excusesLink() {
      switch(this.$route.name) {
        case "Create":
          return '<a data-v-d1a7e442="" href="/excuses/create" aria-current="page" class="links router-link-exact-active router-link-active">Excuses</a>';
          break;
        case "Random":
          return '<a data-v-d1a7e442="" href="/excuses/random" aria-current="page" class="links router-link-exact-active router-link-active">Excuses</a>';
          break;
        default:
          return '<a data-v-d1a7e442="" href="/excuses/random" aria-current="page" class="links">Excuses</a>';
      }
    }
  }
};
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
.excuses-link-active,
.router-link-exact-active {
  color: #C69060;
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
