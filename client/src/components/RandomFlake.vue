<template>
  <div class="container">
    <h1 class="title">Get Random Flake</h1>
    <FlakeSlider v-bind:value.sync="severity" />
    <button class="generate-btn" @click="handleGenerateClick">Generate</button>
    <p v-if="flake">{{ flake.excuse }}</p>
  </div>
</template>

<script>
import excuses from "../data/excuses";
import FlakeSlider from "@/components/FlakeSlider.vue";
import { mapState } from "vuex";

export default {
  components: {
    FlakeSlider
  },
  data() {
    return {
      severity: "3"
    }
  },
  computed: {
    ...mapState({
      flake: state => state.flakes.flake
    })
  },
  methods: {
    handleGenerateClick() {
      const severity = parseInt(this.severity);
      this.$store.dispatch('flakes/randomFlake', severity);
    },
  },
  created() {
    console.log("RandomFlake was created");
    this.$store.dispatch('flakes/getFlakes');
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
