<template>
  <div class="contrainer">
    <div class="sticky-top">
      <header class="header top-wrapper">
        <h1 class="title">To do list</h1>
        <new-todo />
      </header>
      <div
        class="todo-list-control-container top-wrapper"
        v-if="todoList.length"
      >
        <todo-filter />
        <sort-todo />
      </div>
    </div>

    <div v-if="!todoList.length">
      <no-todos />
    </div>
    <div v-else>
      <todo-list />
    </div>
  </div>
</template>

<script>
import NewTodo from "./NewTodo.vue";
import TodoFilter from "./TodoFilter.vue";
import SortTodo from "./SortTodo.vue";
import NoTodos from "./NoTodos.vue";
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoFilter,
    NewTodo,
    SortTodo,
    NoTodos,
    TodoList,
  },

  computed: {
    todoList() {
      return this.$store.getters.todoList;
    },
  },

  watch: {
    //on change - save todos to local storage
    todoList: {
      deep: true,
      handler() {
        this.$store.dispatch("saveTodos");
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/style/constants.scss";

.contrainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.header {
  margin-bottom: 34px;
}
.title {
  font-family: "MontserratBold";
  font-size: 20px;
}
.top-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
}
.todo-list-control-container {
  margin-bottom: 30px;
}
.sticky-top {
  position: sticky;
  top: 0;
  background: white;
  padding-top: 4px;
}

@media (max-width: $mobileWrap) {
  .todo-list-control-container {
    flex-direction: column;
    align-items: flex-start;
  }
  .header {
    margin-bottom: 24px;
  }
  .top-wrapper {
    margin-left: 0;
  }
}
</style>
