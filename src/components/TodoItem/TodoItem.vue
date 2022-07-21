<template>
  <tr class="table__row">
    <td class="table__col">
      <button
        class="todo-complete-btn"
        :class="todoItem.completed ? 'completed' : ''"
        @click="$store.commit('todoComplete', todoItem)"
      >
        <check-arrow :isCompleted="todoItem.completed" />
      </button>
    </td>
    <td class="table__col">
      <p @click="$store.commit('todoComplete', todoItem)" class="todo-title">
        {{ todoItem.title }}
      </p>
    </td>
    <td class="table__col">
      <p class="todo-status" :class="todoItem.completed ? 'completed' : ''">
        {{ todoItem.completed ? "Выполнено" : "В работе" }}
      </p>
    </td>
    <td class="table__col">
      <p>{{ todoItem.date ? getDateString(todoItem.date) : "Неизвестна" }}</p>
      <!-- <button type="button" class="" @click="removeTodo">X</button> -->
    </td>
  </tr>
</template>

<script>
import CheckArrow from "./CheckArrow.vue";
export default {
  components: { CheckArrow },

  props: {
    todoItem: {
      required: true,
      type: Object,
    },
  },

  methods: {
    removeTodo() {
      this.$store.commit("removeTodo", this.todoItem);
    },
    getDateString(date) {
      if (!date) return;
      return new Date(date).toLocaleDateString();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/constants.scss";

.todo-complete-btn {
  background: #ffffff;
  border: 1px solid $blackColor;
  height: 20px;
  width: 20px;
  border-radius: 25px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  &.completed {
    border-color: $blueColor;
    box-shadow: 0px 4px 4px rgba(19, 78, 193, 0.15) !important;
  }
}

.todo-status {
  color: #f89b11;
  &.completed {
    color: $blueColor;
  }
}
.todo-title {
  width: 100%;
  cursor: pointer;
  word-break: break-all;
}

@media (max-width: $mobileWrap) {
  .todo-complete-btn {
    margin: 0 auto;
  }
}
</style>
