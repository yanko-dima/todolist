import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { fetchTasks } from './operations';
// export { fetchTasks } from './operations';

const tasksInitialState = {
  items: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice(
  {
    name: 'tasks',
    initialState: tasksInitialState,
    extraReducers: {
      [fetchTasks.pending](state) {
        state.isLoading = true;
      },
      [fetchTasks.success](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      [fetchTasks.error](state, action) {
        state.pending = false;
        state.error = action.payload;
      },
    },
  }
  // reducers: {
  //   addTask: {
  //     reducer(state, action) {
  //       state.items.push(action.payload);
  //     },
  //     prepare(text) {
  //       return {
  //         payload: {
  //           text,
  //           id: nanoid(5),
  //           completed: false,
  //         },
  //       };
  //     },
  //   },
  //   deleteTask: (state, action) => {
  //     console.log(state);
  //     const index = state.items.findIndex(task => task.id === action.payload);
  //     state.splice(index, 1);
  //     // return state.items.filter(task => task.id !== action.payload);
  //   },
  //   toggleCompleted: (state, action) => {
  //     for (const task of state.items) {
  //       if (task.id === action.payload) {
  //         task.completed = !task.completed;
  //         break;
  //       }
  //     }
  //   },
  // },
);

export const { addTask, deleteTask, toggleCompleted } = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
export const getTasks = state => state.tasks.items;
