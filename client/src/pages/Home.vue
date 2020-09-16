<template>
  <div class="cards">
    <div class="card">
      <button @click="goToExcuses">Excuses</button>
    </div>
    <div class="card">
      <button @click="goToEvents">Events</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToExcuses() {
      this.$router.push("/excuses");
    },
    goToEvents() {
      this.$router.push("/events");
    }
  }
};
</script>

<style scoped>
.cards {
  display: flex;
  max-width: 80%;
  margin-top: 20px;
  margin-left: 10%;
  max-height: 400px;
  justify-content: space-around;
}
.card {
  border-radius: 5px;
  background-color: #E2D8CA;
  box-shadow: 0 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}
</style>