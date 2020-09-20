<template>
  <div class="container">
    <h1 class="title">Create New Flake</h1>
    <label for="flake" class="flake-label">Flake</label>
    <input type="text" name="flake" placeholder="New Flake" class="flake-input"/>
    <FlakeSlider v-bind:value.sync="severity" />
    <button class="generate-btn" @click="handleGenerateClick">Create</button>
  </div>
</template>

<script>
import FlakeSlider from "@/components/FlakeSlider.vue";

export default {
  components: {
    FlakeSlider
  },
  props: [ 'createChosen' ],
  data() {
    return {
      severity: "3",
      flake: ""
    }
  },
  methods: {
    handleGenerateClick() {
      // create new flake
      // add flake to db
      this.$emit("update:createChosen", true);
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
  outline: none;
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
