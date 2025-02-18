import { useState, useEffect, useRef } from "react";
import AddTaskButton from "./AddTaskButton";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a task"
          className="p-2 text-gray-500 font-semibold placeholder:text-gray-400 focus:outline-none"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevent form submission behavior
              inputRef.current?.nextElementSibling?.dispatchEvent(new MouseEvent("click", { bubbles: true })); // Simulate button click
            }
          }}
        />
        <AddTaskButton task={task} setTask={setTask} />
      </div>
    </div>
  );
};

export default AddTaskForm;
