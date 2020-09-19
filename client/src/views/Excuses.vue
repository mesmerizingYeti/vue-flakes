<template>
  <div class="page">
    <div class="card">
      <ul class="tabs">
        <li class="card-tab">
          <router-link
            :to="{
              name: 'Random',
            }"
            class="tab-link"
          >
            <p>Random</p>
          </router-link>
        </li>
        <li class="card-tab">
          <router-link
            :to="{
              name: 'Create',
            }"
            class="tab-link"
          >
            <p>Create</p>
          </router-link>
        </li>
      </ul>
      <div class="card-content">
        <router-view :key="$route.path"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import apiCalendars from "../data/calendars";

export default {
  data() {
    return {
      severity: "3",
      calendars: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.calendars = apiCalendars;
      console.log(vm.calendars);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(this.calendars);
    next();
  }
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  padding: 20px;
}
.card {
  width: 70%;
  max-width: 650px;
  background-color: #e9e2d8;
  border-radius: 5px;
  box-shadow: 0 0 5px;
}
.tabs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: relative;
  background-color: #2b292f;
  z-index: 1;
  border-radius: 5px;
}
.card-tab {
  text-align: center;
  width: 50%;
  color: #2b292f;
  height: 60px;
  font-size: 1.5rem;
}
.tab-link {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #BFBEC0;
  border-bottom: 2px solid #BFBEC0;
}
.tab-link:hover {
  text-decoration: underline;
  color: #FCFFFA;
}
.card-content {
  padding: 20px;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.router-link-exact-active {
  font-weight: bold;
  border-bottom: 4px solid #C69060;
  color: #C69060;
}
</style>
