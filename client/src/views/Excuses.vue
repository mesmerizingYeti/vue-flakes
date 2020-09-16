<template>
  <div class="page">
    <h1>Excuses Page</h1>
    <div class="card">
      <h1 class="card-title">Random Excuse</h1>
      <div class="slider-container">
        <label for="severity" class="slider-label">Severity</label>
        <input
          type="range"
          name="severity"
          min="1"
          max="5"
          value="3"
          v-model="severity"
          class="slider"
        />
        <div class="values-label-container">
          <span class="value-label">1</span>
          <span class="value-label">2</span>
          <span class="value-label">3</span>
          <span class="value-label">4</span>
          <span class="value-label">5</span>
        </div>
      </div>
      <button 
        class="generate-btn"
        @click="handleGenerateClick"
      >
        Generate
      </button>
      <p>{{ flake }}</p>
    </div>
  </div>
</template>

<script>
import excuses from "../data/excuses";

export default {
  data() {
    return {
      severity: "3",
      flake: ""
    }
  },
  methods: {
    handleGenerateClick() {
      const severity = parseInt(this.severity);
      const filteredFlakes = excuses.filter(excuse => excuse.severity === severity);
      const random = Math.floor(Math.random() * filteredFlakes.length);
      this.flake = filteredFlakes[random].excuse;
    }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e9e2d8;
  border-radius: 5px;
  box-shadow: 0 0 5px;
  padding: 20px;
}
.card-title {
  margin-top: 0;
}
.slider-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.slider-label {
  color: #2B292F;
  font-weight: bold;
  font-size: 1.5rem;
}
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  border-radius: 5px;
  background: rgba(43, 41, 47, 0.2); /* Grey background */
  outline: none; /* Remove outline */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
}
.slider:hover {
  background: rgba(43, 41, 47, 0.35);
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #D4593D;
  border-radius: 5px;
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #D4593D;
  cursor: pointer; /* Cursor on hover */
}
.values-label-container {
  width: 97%;
  font-weight: bold;
  color: #2B292F;
  display: flex;
  justify-content: space-between;
}
.generate-btn {
  width: 50%;
  height: 37px;
  border: none;
  border-radius: 5px;
  background-color: #2B292F;
  color: #e9e2d8;
  box-shadow: 0 0 5px;
}
.generate-btn:hover {
  background-color: #46424C;
}
</style>
