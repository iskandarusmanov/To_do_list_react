import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  // reducers: {
  //   addTodo: (state, action) => {
  //     state.todos.push({
  //       id: Date.now(),
  //       text: action.payload,
  //       completed: false,
  //     });
  //     console.log("state", state[0])
  //   },
  //   toggleTodo: (state, action) => {
  //     const todo = state.find((todo) => todo.id === action.payload);
  //     todo.completed = !todo.completed;
  //   },
  //   editTodo: (state, action) => {
  //     const todo = state.todos.find((todo) => state.todos.id === action.payload.id);
  //     state.todos.text = action.payload.text;
  //   },
  //   deleteTodo: (state, action) => {
  //     return state.todos.filter((todo) => todo.id !== action.payload);
  //   },
  // },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
