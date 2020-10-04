<template>
  <div>
    <h1>Events Page</h1>
    <ul>
      <li 
        v-for="event in events"
        :key="event._id"
        class="event_li"
      >
        <p>{{ event.flake.excuse }}</p>
        <p>{{ event.event }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      events: (state) => state.events.events,
    }),
  },
  created() {
    this.$store.dispatch("events/fetchEvents");
  },
};
</script>

<style scoped>
.event_li {
  margin: 5px;
  border: 1px solid black;
  border-radius: 2px;
}
</style>
