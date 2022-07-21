<template>
  <div class="todo-filter-container">
    <img class="search-icon" src="@/assets/search-icon.svg" alt="" />
    <input
      v-model="filterWords"
      placeholder="Поиск ID, Имени, статуса или даты"
      type="text"
      class="todo-filter-input"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterWords: "",
    };
  },

  watch: {
    filterWords() {
      this.$store.commit("filterWords", this.filterWords);
    },
  },
};
</script>

<style lang="scss">
@import "@/style/constants.scss";

.todo-filter-container {
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 12px;
}
.search-icon {
  width: 18px;
  height: 18px;
}
.todo-filter-input {
  border: none;
  width: 100%;
  margin-left: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  &::placeholder {
    color: #c4c4c4;
    text-overflow: ellipsis;
  }
  &:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}
@media (max-width: $mobileWrap) {
  .todo-filter-input {
    width: 250px;
  }
  .todo-filter-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
