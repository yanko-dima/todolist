import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { fetchTasks, addTask } from './operations';
// export { fetchTasks } from './operations';

const tasksInitialState = {
  items: [
    // { id: 0, text: 'Learn HTML and CSS', completed: true },
    // { id: 1, text: 'Get good at JavaScript', completed: true },
    // { id: 2, text: 'Master React', completed: false },
    // { id: 3, text: 'Discover Redux', completed: false },
    // { id: 4, text: 'Build amazing apps', completed: false },
  ],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.error](state, action) {
      state.pending = false;
      state.error = action.payload;
    },
    // AddTask Redusers
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addTask.error](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const tasksReducer = taskSlice.reducer;
export const getTasks = state => state.tasks.items;
export const getIsLoading = state => state.tasks.isLoading;
export const getError = state => state.tasks.error;
