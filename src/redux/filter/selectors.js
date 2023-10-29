import { RootState } from '../store';

export const selectFilter = (state) => state.filter;
export const selectSort = (state) => state.filter.sort;