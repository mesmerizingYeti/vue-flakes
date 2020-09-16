<template>
  <div class="cards">
    <div class="card">
      <div class="card-dummy"></div>
      <button @click="goToExcuses" class="card-btn">
        <div class="card-content">
          <ExcusesIcon />
        </div>
        <div class="description-mask">
          <h1>Go to Excuses</h1>
          <p>Create a new excuse or use an existing one!</p>
        </div>
      </button>
    </div>
    <div class="card">
      <div class="card-dummy"></div>
      <button @click="goToEvents" class="card-btn">
        <div class="card-content">
          <EventsIcon />
        </div>
        <div class="description-mask">
          <h1>Go to Events</h1>
          <p>Check out your upcoming events and excuses!</p>
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
    EventsIcon,
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
.description-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 5px;
  background-color: rgba(43, 41, 47, 0);
  color: rgba(0, 0, 0, 0);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.description-mask:hover {
  background-color: rgba(43, 41, 47, 0.87);
  color: #e2d8ca;
}
h1 {
  font-weight: bold;
  font-size: 3rem;
}
p {
  font-size: 1.5rem;
}
</style>
