<template>
  <div class="card">
      <div class="card-dummy"></div>
      <button @click="action" class="card-btn">
        <div class="card-content">
          <SvgIcon :src="this.iconSrc" width="300px" />
        </div>
        <div class="description-mask">
          <h1>{{ this.title }}</h1>
          <p>{{ this.description }}</p>
        </div>
      </button>
    </div>
</template>

<script>
import SvgIcon from "../components/SvgIcon.vue";

export default {
  props: ['iconSrc', 'title', 'description', 'action'],
  components: {
    SvgIcon
  }
}
</script>

<style scoped>
.card {
  position: relative;
  display: inline-block;
  border-radius: 5px;
  background-color: #e2d8ca;
  box-shadow: 0 0 5px;
  width: 34%;
}
.card:hover {
  background-color: #e9e2d8;
}
.card-btn {
  padding: 0;
  border: none;
}
.card-dummy {
  padding-top: 75%;
}
.card-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.description-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 5px;
  background-color: rgba(43, 41, 47, 0);
  color: rgba(0, 0, 0, 0);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.description-mask:hover {
  background-color: rgba(43, 41, 47, 0.87);
  color: #e2d8ca;
}
h1 {
  font-weight: bold;
  font-size: 3rem;
}
p {
  font-size: 1.5rem;
}
</style>