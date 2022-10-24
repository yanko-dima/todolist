import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const taskSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
        // return [...state, action.payload]
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(5),
            completed: false,
          },
        };
      },
    },
    deleteTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
      // return state.filter(task => task.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
      // return state.map(task => {
      //   if (task.id !== action.payload) {
      //     return task;
      //   }
      //   return {
      //     ...task,
      //     completed: !task.completed,
      //   };
      // });
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
