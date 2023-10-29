import { configureStore } from '@reduxjs/toolkit';
// import filterSlice from './slices/filterSlice';
import filter from './filter/slice';

export const store = configureStore({
	// reducer: { filterSlice },
	reducer: { filter },
});
