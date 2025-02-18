import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TodoDeleteButton from "./TodoDeleteButton";
import TodoEditButton from "./TodoEditButton";

const TodoTable = () => {
  const todos = useSelector((state: RootState) => state.todoSlice);

  const [taskToEditId, setTaskToEditId] = useState("");
  const [taskToEditTask, setTaskToEditTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  if (todos?.length === 0) {
    return (
      <div className="w-full flex justify-center items-center rounded-md p-2 px-3">
        <span className="text-sm text-gray-400 italic">No Task Added Yet.</span>
      </div>
    );
  }

  const handleEditButtonClick = (id: string, task: string) => {
    setTaskToEditId(id);
    setTaskToEditTask(task);
    setIsEditing(true);
  };

  return (
    <div className="flex flex-col gap-1">
      {todos?.map((todo) => (
        <div
          key={todo?.id}
          className="w-full flex justify-between items-center border-[1px] border-gray-500 rounded-md p-2 px-3"
        >
          {isEditing && taskToEditId === todo.id ? (
            <input
              type="text"
              className="p-2 w-full text-gray-300 placeholder:text-gray-400 focus:outline-none"
              placeholder={`You are editing '${todo?.task}'`}
              value={taskToEditTask}
              onChange={(e) => setTaskToEditTask(e.target.value)}
            />
          ) : (
            <span className="text-sm text-gray-300">{todo?.task}</span>
          )}
          <div className="w-fit flex gap-2">
            <TodoEditButton
              currentTaskId={todo.id}
              taskToEditId={taskToEditId}
              updatedTaskValue={taskToEditTask}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              handleEditButtonClick={() =>
                handleEditButtonClick(todo.id, todo.task)
              }
            />
            <TodoDeleteButton id={todo?.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoTable;
