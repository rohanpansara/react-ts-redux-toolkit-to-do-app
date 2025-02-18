import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../redux/slices/todoSlice";
import { AppDispatch, RootState } from "../redux/store";
import TodoDeleteButton from "./TodoDeleteButton";
import TodoEditButton from "./TodoEditButton";

const TodoTable = () => {
  const todos = useSelector((state: RootState) => state.todoSlice);

  const dispatch = useDispatch<AppDispatch>();

  const [taskToEditId, setTaskToEditId] = useState("");
  const [taskToEditTask, setTaskToEditTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditButtonClick = (id: string, task: string) => {
    setTaskToEditId(id);
    setTaskToEditTask(task);
    setIsEditing(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!taskToEditTask.trim()) return;
      dispatch(updateTask({ id: taskToEditId, task: taskToEditTask.trim() }));
      setIsEditing(false);
    }
  };

  if (todos?.length === 0) {
    return (
      <div className="w-full flex justify-center items-center rounded-md p-2 px-3">
        <span className="text-sm text-gray-400 italic">No Task Added Yet.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      {todos?.map((todo) => (
        <div
          key={todo?.id}
          className="w-full flex justify-between items-center bg-gray-300 rounded-md p-2 px-3"
        >
          {isEditing && taskToEditId === todo.id ? (
            <input
              ref={inputRef}
              type="text"
              className="w-full font-medium text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none"
              placeholder={`You are editing '${todo?.task}'`}
              value={taskToEditTask}
              onChange={(e) => setTaskToEditTask(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <span className="text-sm text-gray-600">{todo?.task}</span>
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
