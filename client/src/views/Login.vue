<template>
  <div>
    <h1>Login Page</h1>
    <button type="button" @click="handleClick">Google</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      window.location="https://www.google.com";
    }
  }
}
</script>

<style scoped></style>
