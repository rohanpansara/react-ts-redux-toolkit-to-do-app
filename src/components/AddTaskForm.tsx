import { useState } from "react";
import AddTaskButton from "./AddTaskButton";

const AddTaskForm = () => {
  const [task, setTask] = useState("");

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <input
          type="text"
          placeholder="Add a task"
          className="p-2 text-gray-300 placeholder:text-gray-400 focus:outline-none"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <AddTaskButton task={task} setTask={setTask}/>
      </div>
    </div>
  );
};

export default AddTaskForm;
