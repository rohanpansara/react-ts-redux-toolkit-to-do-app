import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/todoSlice";
import { AppDispatch } from "../redux/store";

interface AddTaskButtonProps {
  task: string;
  setTask: (input: string) => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ task, setTask }) => {
  const dispatch = useDispatch<AppDispatch>();

  const addTaskHandler = () => {
    if (task.trim() === "") {
      return;
    }
    dispatch(addTask(task.trim()));
    setTask("");
  };

  return (
    <button
      className="bg-blue-700 py-2 px-3 rounded-md text-gray-300 hover:cursor-pointer"
      onClick={addTaskHandler}
    >
      Add
    </button>
  );
};

export default AddTaskButton;
