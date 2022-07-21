<template>
  <div class="no-todos-container">
    <div v-if="!isLoading">
      <h4 class="no-todos__header">
        Список дел пуст. Вы можете получить демонстрационный список.
      </h4>
      <button class="fetch-demo-todos-btn" @click="fetchTodos">
        Получить список
      </button>
    </div>
    <div v-else>
      <loader />
    </div>
  </div>
</template>

<script>
import Loader from "./UI/LoaderUI.vue";
export default {
  components: { Loader },

  data() {
    return {
      isLoading: false,
    };
  },

  methods: {
    fetchTodos() {
      this.isLoading = true;
      this.$store.dispatch("fetchTodos");
    },
  },
};
</script>

<style lang="scss" scoped>
.no-todos-container {
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.no-todos__header {
  text-align: center;
  margin-bottom: 24px;
}
.fetch-demo-todos-btn {
  width: 10rem;
  background: none;
  border: none;
  background: #d6dbeb;
  color: darkBlueColor;
  border-radius: 25px;
  padding: 6px;
}
</style>
