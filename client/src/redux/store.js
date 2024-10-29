
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from  './rootReducers.js';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
