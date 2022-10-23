import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'task/addTAsk',
    payload: {
      id: nanoid(5),
      completed: false,
      text,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'task/deleteTask',
    payload: taskId,
  };
};

export const togleCompleted = taskId => {
  return {
    type: 'task/togleCompleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filter/setStatusFilter',
    payload: value,
  };
};
