<template>
  <div>
    <modal
      v-show="modal"
      header="Создать новую задачу"
      @closeModal="modal = false"
    >
      <div class="todo-title-container">
        <p class="todo-title-header">Описание</p>
        <input
          class="todo-title"
          type="text"
          ref="todoTitleInput"
          placeholder="Введите описание"
          v-model="newTodoTitle"
        />
      </div>
      <button
        type="submit"
        class="modal__create-todo-button"
        @click="newTodoAdd"
      >
        Создать
      </button>
    </modal>
    <button class="show-modal-button" @click="modal = true">
      <img src="@/assets/add-icon.svg" />
    </button>
  </div>
</template>

<script>
import Modal from "./UI/Modal.vue";
export default {
  components: { Modal },

  data() {
    return {
      newTodoTitle: "",
      modal: false,
    };
  },

  methods: {
    idGenerator() {
      const todoList = this.$store.getters.todoList;
      return !todoList.length ? 1 : todoList.at(-1).id + 1;
    },
    newTodoAdd(e) {
      e.preventDefault();
      if (!this.newTodoTitle.length) return;

      const todo = {
        id: this.idGenerator(),
        title: this.newTodoTitle,
        completed: false,
        date: +new Date(),
      };

      this.$store.commit("addTodo", todo);
      this.newTodoTitle = "";
      this.modal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/constants.scss";

.todo-title-container {
  width: 100%;
}
.todo-title-header {
  margin-bottom: 5px;
}
.todo-title {
  margin-bottom: 30px;
  border: 1px solid #dde2e4;
  border-radius: 8px;
  padding: 11px 16px;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
    color: #000000;
    opacity: 0.5;
  }
}
.modal__create-todo-button {
  background: #f0f5ff;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  line-height: 24px;
  padding: 12px 40px;
  width: min-content;
  color: darkBlueColor;
}

.show-modal-button {
  background: none;
  border: none;
  padding: 10px;
  background: #d6dbeb;
  font-size: 20px;
  text-align: center;
  border: none;
  height: 40px;
  padding: 10px;
  display: inline-flex;
  border-radius: 25px;
  color: darkBlueColor;
}
</style>
