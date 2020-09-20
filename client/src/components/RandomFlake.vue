<template>
  <div class="container">
    <h1 class="title">Get Random Flake</h1>
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
  props: [ 'randomChosen', 'flake' ],
  data() {
    return {
      severity: "3"
    }
  },
  methods: {
    handleGenerateClick() {
      const severity = parseInt(this.severity);
      const filteredFlakes = excuses.filter(
        (excuse) => excuse.severity === severity
      );
      const random = Math.floor(Math.random() * filteredFlakes.length);
      this.$emit("update:randomChosen", true);
      this.$emit("update:flake", filteredFlakes[random].excuse)
      console.log(filteredFlakes[random].excuse);
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
.generate-btn {
  width: 50%;
  height: 37px;
  border: none;
  border-radius: 5px;
  background-color: #2B292F;
  color: #E9E2d8;
  box-shadow: 0 0 5px;
  outline: none;
}
.generate-btn:hover {
  background-color: #46424C;
}
</style>
