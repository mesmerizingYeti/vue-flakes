<template>
  <div class="page">
    <div :class="flakeCardClasses">
      <ul class="tabs">
        <li class="card-tab">
          <a href="#" id="random-link" class="tab-link link-exact-active" @click="handleRandomClick">Random</a>
        </li>
        <li class="card-tab">
          <a href="#" id="create-link" class="tab-link" @click="handleCreateClick">Create</a>
        </li>
      </ul>
      <div class="card-content">
        <RandomFlake v-if="randomFlakeTab" v-bind:randomChosen.sync="randomChosen" v-bind:flake.sync="randomFlake"/>
        <CreateFlake v-if="!randomFlakeTab" v-bind:createChosen.sync="createChosen" v-bind:flake.sync="createFlake" v-bind:error.sync="flakeError"/>
      </div>
    </div>
    <div class="card">
      <CalendarEventForm />
    </div>
  </div>
</template>

<script>
import CalendarEventForm from "../components/CalendarEventForm";
import CreateFlake from "../components/CreateFlake";
import RandomFlake from "../components/RandomFlake";

export default {
  components: {
    CalendarEventForm,
    CreateFlake,
    RandomFlake
  },
  data() {
    return {
      randomFlake: "",
      createFlake: "",
      severity: "3",
      randomFlakeTab: true,
      randomChosen: false,
      createChosen: false,
      flakeError: false
    };
  },
  computed: {
    flakeCardClasses() {
      let cardClasses = "";
      if (this.flakeError) {
        cardClasses = "card card-error";
      } else if(this.randomChosen || this.createChosen) {
        cardClasses = "card card-chosen";
      } else {
        cardClasses = "card";
      }
      return cardClasses;
    }
  },
  methods: {
    handleRandomClick() {
      this.randomFlakeTab = true;
      this.createChosen = false;
      document.getElementById("random-link").className = "tab-link link-exact-active";
      document.getElementById("create-link").className = "tab-link";
    },
    handleCreateClick() {
      this.randomFlakeTab = false;
      this.randomChosen = false;
      document.getElementById("create-link").className = "tab-link link-exact-active";
      document.getElementById("random-link").className = "tab-link";
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
  background-color: #e9e2d8;
  border-radius: 5px;
  box-shadow: 0 0 5px;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.card-chosen {
  box-shadow: 0 0 5pt 4pt #63A05B;
}
.card-error {
  box-shadow: 0 0 5pt 4pt #F44336;
}
.tabs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: relative;
  background-color: #2b292f;
  z-index: 1;
  border-radius: 5px 5px 0 0;
}
.card-tab {
  text-align: center;
  width: 50%;
  color: #2b292f;
  height: 60px;
  font-size: 1.5rem;
}
.tab-link {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #BFBEC0;
  border-bottom: 2px solid #BFBEC0;
}
.tab-link:hover {
  text-decoration: underline;
  color: #FCFFFA;
}
.card-content {
  padding: 20px;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.link-exact-active {
  font-weight: bold;
  border-bottom: 4px solid #C69060;
  color: #C69060;
}
</style>
