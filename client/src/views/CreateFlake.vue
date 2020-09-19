<template>
  <div class="container">
    <h1 class="title">Create New Flake</h1>
    <label for="flake" class="flake-label">Flake</label>
    <input type="text" name="flake" placeholder="Your flake here" class="flake-input"/>
    <FlakeSlider v-bind:value.sync="severity" />
    <button class="generate-btn" @click="handleGenerateClick">Create</button>
    <p>{{ flake }}</p>
  </div>
</template>

<script>
import excuses from "../data/excuses";
import FlakeSlider from "@/components/FlakeSlider.vue";

export default {
  components: {
    FlakeSlider
  },
  data() {
    return {
      severity: "3",
      flake: ""
    }
  },
  methods: {
    handleGenerateClick() {
      const severity = parseInt(this.severity);
      const filteredFlakes = excuses.filter(
        (excuse) => excuse.severity === severity
      );
      const random = Math.floor(Math.random() * filteredFlakes.length);
      this.flake = filteredFlakes[random].excuse;
    },
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  margin-top: 0;
  color: #2b292f;
}
.flake-label {
  font-weight: bold;
  font-size: 1.5rem;
  color: #2B292F;
}
.flake-input {
  width: 80%;
  height: 35px;
  margin: 2px;
  margin-bottom: 15px;
  padding-left: 6px;
  padding-right: 6px;
  border-color: #2B292F;
  border-radius: 5px;
}
.generate-btn {
  width: 50%;
  height: 37px;
  border: none;
  border-radius: 5px;
  background-color: #2B292F;
  color: #E9E2d8;
  box-shadow: 0 0 5px;
}
.generate-btn:hover {
  background-color: #46424C;
}
</style>
