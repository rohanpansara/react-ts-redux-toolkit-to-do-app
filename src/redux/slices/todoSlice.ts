import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
export interface ToDo {
  id: string;
  task: string;
}

// Initial state
const initialState: ToDo[] = [{ id: "0", task: "Sample Task Added From todoSlice" }];

// Create the slice
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: ToDo = {
        id: nanoid(),
        task: action.payload,
      };
      state.push(newTask);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<ToDo>) => {
      console.log("payload", action.payload);
      const taskToUpdate = state.find((todo) => todo.id === action.payload.id);
      if (taskToUpdate) {
        taskToUpdate.task = action.payload.task;
      }
    }    
  },
});

// Export actions
export const { addTask, removeTask, updateTask } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
