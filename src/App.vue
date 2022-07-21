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
}
</style>
