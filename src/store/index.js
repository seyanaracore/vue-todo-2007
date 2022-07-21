import Vue from "vue";
import Vuex from "vuex";
import getTodos from "../api/getTodos";
import { DEFAULT_TODO_LIST, LOCAL_TODOS_KEY } from "../utils/constants";
import LocalStorageUtil from "../utils/LocalStorage.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
    demoTodos: [],
    filterWords: "",
    sortBy: "",
  },

  getters: {
    todoList: (state) => state.todoList,
    demoTodos: (state) => state.demoTodos,
    filteredTodos: (state) =>
      state.todoList.filter((todo) => {
        const title = todo.title.toLowerCase();
        const id = todo.id.toString();
        const dateString = new Date(todo?.date).toLocaleDateString();
        const status = todo.completed ? "выполнено" : "в работе";

        return [title, id, dateString, status].some((el) =>
          el.includes(state.filterWords)
        );
      }),
    sortBy: (state) => state.sortBy,
  },

  mutations: {
    setTodoList(state, payload) {
      state.todoList = payload;
    },
    setDemoTodos(state, payload) {
      state.demoTodos = payload;
    },
    filterWords(state, payload) {
      state.filterWords = payload.toLowerCase();
    },
    todoComplete(state, payload) {
      state.todoList.map((todo) => {
        if (todo.id === payload.id) todo.completed = !todo.completed;
      });
    },
    removeTodo(state, payload) {
      state.todoList = state.todoList.filter((todo) => todo.id !== payload.id);
    },
    addTodo(state, payload) {
      state.todoList.push(payload);
    },
    setSort(state, payload) {
      state.sortBy = payload;
    },
  },

  actions: {
    async fetchTodos(state) {
      const demoTodosList = state.getters.demoTodos;
      if (!demoTodosList.length) {
        const data = await getTodos();
        state.commit("setDemoTodos", data);
      }
      state.commit("setTodoList", state.getters.demoTodos);
    },
    getLocalTodos(state) {
      const localTodos = LocalStorageUtil.get(LOCAL_TODOS_KEY) || [];
      state.commit(
        "setTodoList",
        localTodos?.length ? localTodos : DEFAULT_TODO_LIST
      );
    },
    saveTodos(state) {
      const todoList = state.getters.todoList;
      LocalStorageUtil.set(LOCAL_TODOS_KEY, todoList);
    },
  },
});
