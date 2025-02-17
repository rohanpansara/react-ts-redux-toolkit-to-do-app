import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

// Create the store
export const store = configureStore({
  reducer: {
    todoSlice,
  },
});

// Infer types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
