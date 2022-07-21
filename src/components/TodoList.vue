<template>
  <div v-if="!todoList.length">
    <h4 class="no-todos-title">К сожалению, ничего не найдено...</h4>
  </div>
  <table class="table" v-else>
    <thead class="table__headers">
      <tr class="table__row">
        <td class="table__col"></td>
        <td class="table__col"><p>Описание</p></td>
        <td class="table__col"><p>Статус</p></td>
        <td class="table__col"><p>Дата</p></td>
      </tr>
    </thead>
    <tbody>
      <todo-item
        v-for="todoItem in todoList"
        class="todo-item"
        :todoItem="todoItem"
        :class="todoItem.completed ? 'completed' : ''"
        :key="todoItem.id"
      />
    </tbody>
  </table>
</template>

<script>
import TodoItem from "./TodoItem/TodoItem.vue";

const sortByDate = (todoList) => {
  return todoList.sort((todo1, todo2) => {
    return todo1.date > todo2.date ? -1 : 1;
  });
};
const sortByStatus = (todoList) => {
  return todoList.sort((todo1) => {
    return todo1?.completed ? 1 : -1;
  });
};

export default {
  components: { TodoItem },

  computed: {
    todoList() {
      const todoList = this.$store.getters.filteredTodos;
      const sortBy = this.$store.getters.sortBy;
      switch (sortBy) {
        case "Дата":
          return sortByDate(todoList);
        case "Статус":
          return sortByStatus(todoList);
        default:
          return todoList;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/style/constants.scss";

.no-todos-title {
  text-align: center;
}
.table {
  width: 100%;
}
.table__headers .table__col:not(:first-child) > * {
  border-left: 1px solid #c4c4c4;
  font-size: 14px;
  line-height: 18px;
  padding: 10px 20px 4px;
}
.table__row {
  display: flex;
  height: 58px;
  border-bottom: 1px solid #eeebe9;
}
.table__col {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  & > * {
    padding: 10px 20px;
  }
  &:first-child {
    max-width: 80px;
  }
  &:nth-child(2) {
    max-width: 938px;
  }
  &:nth-child(3) {
    max-width: 151px;
  }
  &:nth-child(4) {
    max-width: 129px;
  }
}

.todo-item {
  &:hover {
    background: #f6f9ff;
  }
}
@media (max-width: $mobileWrap) {
  .table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  .table__col {
    white-space: break-spaces;
    &:first-child {
      width: 60px;
    }
    &:nth-child(2) {
      width: 214px;
    }
    &:nth-child(3) {
      width: 151px;
    }
    &:nth-child(4) {
      width: 129px;
    }
  }
}
</style>
