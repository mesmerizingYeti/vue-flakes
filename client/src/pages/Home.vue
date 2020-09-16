<template>
  <div class="cards">
    <div class="card">
      <div class="card-dummy"></div>
      <button @click="goToExcuses" class="card-btn">
        <div class="card-content">
          <ExcusesIcon />
        </div>
      </button>
    </div>
    <div class="card">
      <div class="card-dummy"></div>
      <button @click="goToEvents" class="card-btn">
        <div class="card-content">
          <EventsIcon />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import ExcusesIcon from "../components/ExcusesIcon.vue";
import EventsIcon from "../components/EventsIcon.vue";

export default {
  components: {
    ExcusesIcon,
    EventsIcon
  },
  methods: {
    goToExcuses() {
      this.$router.push("/excuses");
    },
    goToEvents() {
      this.$router.push("/events");
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-around;
  max-width: 80%;
  margin-top: 20px;
  margin-left: 10%;
  max-height: 400px;
}
.card {
  position: relative;
  display: inline-block;
  border-radius: 5px;
  background-color: #e2d8ca;
  box-shadow: 0 0 5px;
  width: 34%;
}
.card:hover {
  background-color: #e9e2d8;
}
.card-btn {
  padding: 0;
  border: none;
}
.card-dummy {
  padding-top: 75%;
}
.card-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
