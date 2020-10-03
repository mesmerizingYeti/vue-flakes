<template>
  <div class="container">
    <h1>Calendar Thing</h1>
    <div class="calendar-select">
      <select
        name="calendar"
        v-on:change="handleChooseCalendar"
      >
        <option
          v-for="calendar in calendars"
          :key="calendar.id"
          :value="calendar.id"
        >
          {{ calendar.summary }}
        </option>
      </select>
    </div>
    <div class="event-select">
      <select 
        name="event"
        v-on:change="handleChooseEvent"
      >
        <option 
          v-for="event in events" 
          :key="event.id" 
          :value="event.id"
        >
          {{ event.summary }}
        </option>
      </select>
    </div>
    <button @click="handleClick" class="event-btn">Choose Event</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      calendars: state => state.google.calendars,
      currentCalendar: state => state.google.calendar,
      events: state => state.google.events,
      currentEvent: state => state.google.event
    })
  },
  methods: {
    handleChooseCalendar(event) {
      event.preventDefault();
      console.log("In chooseCalendar");
      const calendarId = event.target.value;
      console.log(calendarId);
      this.$store.dispatch("google/chooseCalendar", calendarId);
      this.$store.dispatch("google/getEventsFromGoogle");
    },
    handleChooseEvent(event) {
      event.preventDefault();
      console.log("In chooseEvent")
      const eventId = event.target.value;
      this.$store.dispatch("google/chooseEvent", eventId);
      console.log(eventId);
    },
    handleClick() {
      console.log("create event with chosen event and flake");
      console.log(this.currentCalendar);
      console.log(this.currentEvent);
      if (this.currentCalendar && this.currentEvent) {
        this.$store.dispatch("events/createEvent");
      }
    },
  },
  created() {
    this.$store.dispatch("google/getCalendarsFromGoogle");
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100%;
}
.calendar-select {
  height: 35px;
  width: 70%;
  outline: none;
  position: relative;
}
.event-select {
  height: 35px;
  width: 70%;
  margin: 20px;
  outline: none;
  position: relative;
  background-color: green;
}
/* hide original select */
/* .calendar-select select,
.event-select select {
} */
.select-selected {
  background-color: dodgerblue;
}
/* style the select arrow */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}
/* style the select arrow when select is open */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}
/* style the options, including the selected one */
.select-items div,
.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}
/* style the options */
.select-items {
  position: absolute;
  background-color: dodgerblue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}
/* hide options when select is closed */
/* .select-hide {
} */
.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
.event-btn {
  width: 50%;
  height: 37px;
  border: none;
  border-radius: 5px;
  background-color: #2b292f;
  color: #e9e2d8;
  box-shadow: 0 0 5px;
  outline: none;
}
#event-btn:hover {
  background-color: #46424c;
}
</style>
