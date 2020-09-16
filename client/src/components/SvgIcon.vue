<template>
  <div>
    <img :src="this.src" alt="excuses" :style="style">
  </div>
</template>

<script>
export default {
  props: ['src','width'],
  computed: {
    style() {
      return `width: ${this.width ? this.width : '100px'}`;
    }
  }
}
</script>

<style scoped>
div img {
  max-width: 100%;
  height: auto;
  max-height: 100%;
}
</style>