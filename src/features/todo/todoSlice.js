import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((x) => x.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((x) =>
        x.id === action.payload.id ? (x.todo = action.payload.todo) : x
      );
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((x) =>
        x.id === action.payload ? { ...x, completed: !x.completed } : x
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleComplete, setTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
