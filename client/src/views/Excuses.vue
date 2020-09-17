<template>
  <div class="page">
    <h1>Excuses Page</h1>
    <div class="card">
      <ul class="tabs">
        <li class="card-tab">
          <router-link
            :to="{
              name: 'Random',
            }"
            class="tab-link"
          >
            Random
          </router-link>
        </li>
        <li class="card-tab">
          <router-link
            :to="{
              name: 'Create',
            }"
            class="tab-link"
          >
            Create
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
export default {
  data() {
    return {
      severity: "3",
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("checking this works");
    console.log(to.path);
    console.log(to.path === "/excuses" ? "yes" : "no");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("in udpate");
    console.log(to.path);
    next();
  },
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
  height: 550px;
  background-color: #e9e2d8;
  border-radius: 5px;
  box-shadow: 0 0 5px;
}
.tabs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid-row;
  width: 100%;
}
@keyframes tabs-animation {
  from {
    height: 550px;
    font-size: 5rem;
  }
  to {
    height: 60px;
    font-size: 1.5rem;
  }
}
.card-tab {
  text-align: center;
  float: left;
  width: 50%;
  border-bottom: 2px solid #2b292f;
  color: #2b292f;
  animation-name: tabs-animation;
  animation-duration: 1s;
  animation-delay: 2s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  height: 550px;
  font-size: 5rem;
}
.tab-link {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
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
</style>
