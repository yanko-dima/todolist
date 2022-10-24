import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Actions with pprepareAction
export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      text,
      id: nanoid(5),
      completed: false,
    },
  };
});

export const deleteTask = createAction('tasks/deleteTask', taskId => {
  return {
    payload: taskId,
  };
});
export const toggleCompleted = createAction('tasks/toggleCompleted', taskId => {
  return {
    payload: taskId,
  };
});
export const setStatusFilter = createAction('filter/setStatusFilter', value => {
  return {
    payload: value,
  };
});

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(5),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: 'filter/setStatusFilter',
//     payload: value,
//   };
// };
