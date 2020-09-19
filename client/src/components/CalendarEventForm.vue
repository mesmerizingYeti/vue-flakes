<template>
  <div>
    <h1>Calendar Thing</h1>
    <select name="calendar" id="calendar-select" v-model="calendar" v-on:change="handleChooseCalendar">
      <option 
        v-for="calendar in calendars"
        :key="calendar.id"
        :value="calendar.id"
      >
        {{calendar.summary}}
      </option>
    </select>
    <select name="event" id="event-select" v-model="event">
      <option
        v-for="event in events"
        :key="event.id"
        :value="event.id"
      >
        {{event.summary}}
      </option>
    </select>
    <button @click="handleClick">Choose Event</button>
  </div>
</template>

<script>
import apiCalendars from "../data/calendars";
import { calendarOneEvents, calendarTwoEvents, calendarThreeEvents } from "../data/events";

export default {
  data() {
    return {
      calendars: [],
      events: [],
      calendarsAvailable: false,
      eventsAvailable: false,
      calendar: "",
      event: ""
    }
  },
  methods: {
    fetchCalendars() {
      this.calendars = apiCalendars;
      this.calendarsAvailable = true;
    },
    fetchEvents() {
      console.log(this.calendar);
      switch (this.calendar) {
        case "1@group.calendar.google.com":
          this.events = calendarOneEvents;
          break;
        case "2@group.calendar.google.com":
          this.events = calendarTwoEvents;
          break;
        case "3@group.calendar.google.com":
          this.events = calendarThreeEvents;
          break;
        default:
          console.error("Unknown calendar");
      }
      this.eventsAvailable = true;
    },
    handleChooseCalendar() {
      this.fetchEvents();
    },
    handleClick() {
      console.log(this.calendar);
      console.log(this.event);
    }
  },
  created() {
    this.fetchCalendars();
  },
};
</script>

<style scoped></style>
