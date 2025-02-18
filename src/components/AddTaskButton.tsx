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
    if (task.trim() === "") return;
    dispatch(addTask(task.trim()));
    setTask("");
  };

  return (
    <button
      className="bg-[#28C2FF] py-1 px-2 rounded-md text-gray-300 hover:cursor-pointer"
      onClick={addTaskHandler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 48 48"
        className="fill-[#0c4257]"
      >
        <path d="M 23.976562 4.9785156 A 1.50015 1.50015 0 0 0 22.5 6.5 L 22.5 22.5 L 6.5 22.5 A 1.50015 1.50015 0 1 0 6.5 25.5 L 22.5 25.5 L 22.5 41.5 A 1.50015 1.50015 0 1 0 25.5 41.5 L 25.5 25.5 L 41.5 25.5 A 1.50015 1.50015 0 1 0 41.5 22.5 L 25.5 22.5 L 25.5 6.5 A 1.50015 1.50015 0 0 0 23.976562 4.9785156 z"></path>
      </svg>
    </button>
  );
};

export default AddTaskButton;
