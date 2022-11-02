import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filterInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
      //   return {
      //     ...state,
      //     status: action.payload,
      //   };
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const getStatusFilter = state => state.filters.status;
