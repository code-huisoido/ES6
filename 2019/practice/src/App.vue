<template>
  <div id="app">
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import "highlight.js/styles/vs2015.css";
import Menu from "./components/Menu.vue";

export default {
  name: "app",
  components: {
    Menu
  },
  methods: {}
};
</script>

<style lang="stylus">
html {
  font-size: 100%;
  font-family: 'alibaba';
}

body, #app {
  margin: 0 !important;
  padding: 0 !important;
}

#content {
  width: 580px;
  padding-left: 330px;
  margin-left: 0px;
  margin-right: 0px;
  padding-top: 10px;
  padding-bottom: 150px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 0.8rem;
  line-height: 1.3rem;
  /* border: 1px solid black; */
  counter-reset: section;
}

</style>
