<template>
  <div class="sort-container">
    <p class="sort__title">Сортировать&nbsp;по:</p>
    <!-- <select v-model="sortBy" id="sort-by">
      <option v-for="(sortType, idx) in sortingTypes" :key="idx">
        {{ sortType.title }}
      </option>
    </select> -->
    <!-- Thanks Safari :) -->
    <custom-select
      class="sort__select"
      :options="sortingTypes"
      @input="sortBy"
    />
  </div>
</template>

<script>
import CustomSelect from "./UI/CustomSelect.vue";
export default {
  components: { CustomSelect },

  data() {
    return {
      sortingTypes: ["Дата", "Статус"],
    };
  },

  methods: {
    sortBy(option) {
      this.$store.commit("setSort", option);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/constants.scss";
.sort__title {
  margin-right: 15px;
}
.sort-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
@media (max-width: $mobileWrap) {
  .sort-container {
    margin-top: 12px;
    align-self: center;
  }
}
</style>
