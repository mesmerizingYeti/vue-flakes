<template>
  <div class="cards">
    <HomeCard
      :iconSrc="require('@/assets/excuses.svg')"
      title="Go to Excuses"
      description="Create a new excuse or use an existing one!"
      :action="goToExcuses"
    />
    <HomeCard
      :iconSrc="require('@/assets/events.svg')"
      title="Go to Events"
      description="Check out your upcoming events and excuses!"
      :action="goToEvents"
    />
  </div>
</template>

<script>
import HomeCard from "../components/HomeCard.vue";

export default {
  components: {
    HomeCard,
  },
  methods: {
    goToExcuses() {
      this.$router.push("/flakes");
    },
    goToEvents() {
      this.$router.push("/events");
    },
  },
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-around;
  max-width: 80%;
  margin-top: 20px;
  margin-left: 10%;
  max-height: 400px;
}
</style>
