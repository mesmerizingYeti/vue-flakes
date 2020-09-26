<template>
  <div class="container">
    <h1 class="title">Create New Flake</h1>
    <label for="flake" class="flake-label">Flake</label>
    <input type="text" name="flake" placeholder="New Flake" class="flake-input" v-model="flakeName"/>
    <FlakeSlider v-bind:value.sync="severity" />
    <button class="generate-btn" @click="handleGenerateClick">Create</button>
    <p></p>
  </div>
</template>

<script>
import FlakeSlider from "@/components/FlakeSlider.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    FlakeSlider
  },
  data() {
    return {
      severity: "3",
      flakeName: ""
    }
  },
  computed: {
    ...mapState({
      flake: state => state.flakes.flake,
      flakes: state => state.flakes.flakes,
    })
  },
  methods: {
    ...mapActions({
      
    }),
    handleGenerateClick() {
      // create new flake
      // add flake to db
      if (!this.flakeName) {
        // Need to enter the new flake
        this.$store.dispatch("flakes/userFlakeError", true);
        this.$store.dispatch("flakes/clearFlakeData");
      } else {
        // Create new flake
        this.$store.dispatch("flakes/userFlakeError", false);
        this.$store.dispatch("flakes/createFlake", { 
          title: this.flakeName, 
          severity: this.severity 
        });
      }
    }
  },
  created() {
    console.log("CreateFlake was created");
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
