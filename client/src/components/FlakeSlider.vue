<template>
  <div class="slider-container">
    <label for="severity" class="slider-label">Severity</label>
    <input
      type="range"
      name="severity"
      min="1"
      max="5"
      :value="value"
      v-on:change="handleChange"
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
</template>

<script>
export default {
  props: ["value"],
  methods: {
    handleChange($event) {
      this.$emit('update:value', $event.target.value);
    }
  }
};
</script>

<style scoped>
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
</style>
