<template>
  <div class="container">
    <h1 class="title">Choose Severity</h1>
    <FlakeSlider v-bind:value.sync="severity" />
    <button class="generate-btn" @click="handleGenerateClick">Generate</button>
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
