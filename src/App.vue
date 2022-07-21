<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/TodosApp.vue";

export default {
  name: "App",

  components: { Todos },

  beforeMount() {
    this.$store.dispatch("getLocalTodos");
  },
};
</script>

<style lang="scss">
@import "@/style/constants.scss";

#app {
  max-width: 1300px;
  padding: 0 12px;
  margin: 100px auto 12px;
}
* {
  margin: 0;
  padding: 0;
  color: $blackColor;
  font-family: "VelaSansRegular", sans-serif;
  &:focus-visible {
    outline: none;
  }
}
button {
  cursor: pointer;
}
@font-face {
  font-family: "MontserratBold";
  src: url("./fonts/Montserrat-Bold.ttf");
  font-style: normal;
  font-weight: bold;
}
@font-face {
  font-family: "VelaSansRegular";
  src: url("./fonts/VelaSans-Regular.ttf");
  font-style: normal;
  font-weight: normal;
}

@media (max-width: $mobileWrap) {
  #app {
    margin-top: 24px;
  }
}
</style>
