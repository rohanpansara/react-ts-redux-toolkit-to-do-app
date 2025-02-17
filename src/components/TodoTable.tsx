import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TodoDeleteButton from "./TodoDeleteButton";
import TodoEditButton from "./TodoEditButton";

const TodoTable = () => {
  const todos = useSelector((state: RootState) => state.todoSlice);

  const [editingTaskId, setEditingTaskId] = useState("");
  const [newUpdatedTask, setNewUpdatedTask] = useState("");

  if (todos.length === 0) {
    return (
      <div className="w-full flex justify-center items-center rounded-md p-2 px-3">
        <span className="text-sm text-gray-400 italic">No Task Added Yet.</span>
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo?.id}
          className="w-full flex justify-between items-center border-[1px] border-gray-500 rounded-md p-2 px-3"
        >
          {editingTaskId && editingTaskId === todo.id ? (
            <input
              type="text"
              placeholder={`You are editing '${todo?.task}'`}
              className="p-2 text-gray-300 placeholder:text-gray-400 focus:outline-none"
              value={todo?.task}
              onChange={(e) => {setNewUpdatedTask(e.target.value)}}
            />
          ) : (
            <span className="text-sm text-gray-300">{todo?.task}</span>
          )}
          <div className="w-fit flex gap-2">
            <TodoEditButton
              todo={{id: editingTaskId, task: newUpdatedTask}}
              isEditing={editingTaskId === todo.id}
              setEditingTask={setNewUpdatedTask}
              setEditingTaskId={setNewUpdatedTask}
            />
            <TodoDeleteButton id={todo.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoTable;
