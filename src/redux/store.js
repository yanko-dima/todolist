import { configureStore } from '@reduxjs/toolkit';
// import { rootReduser } from './reduser';
import { tasksReducer, filtersReducer } from './reduser';

// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReduser } from './reduser';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReduser, enhancer);

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
