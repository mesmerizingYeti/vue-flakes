<template>
  <div class="page">
    <h1>Excuses Page</h1>
    <div class="card">
      <ul class="tabs">
        <li class="card-tab">Random</li>
        <li class="card-tab">Create</li>
      </ul>
      <div class="card-content">
        <RandomFlake />
      </div>
    </div>
  </div>
</template>

<script>
import RandomFlake from "../views/RandomFlake.vue";

export default {
  components: {
    RandomFlake
  },
  data() {
    return {
      severity: "3",
    };
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
  background-color: #E9E2d8;
  border-radius: 5px;
  box-shadow: 0 0 5px;
}
.tabs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid-row;
  width: 100%;
  height: 40px;
}
.card-tab {
  text-align: center;
  float: left;
  width: 50%;
  height: 100%;
  border-bottom: 2px solid  #2B292F;
  font-size: 1.5rem;
  color: #2B292F;
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
