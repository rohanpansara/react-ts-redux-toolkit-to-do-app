import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { updateTask } from "../redux/slices/todoSlice";

interface TodoEditButtonProps {
  todo: { id: string; task: string } | null;
  isEditing: boolean;
  setEditingTask: React.Dispatch<React.SetStateAction<string>>;
  setEditingTaskId: React.Dispatch<React.SetStateAction<string>>;
}

const TodoEditButton: React.FC<TodoEditButtonProps> = ({
  todo,
  isEditing,
  setEditingTask,
  setEditingTaskId
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const editButtonHandler = () => {
    setEditingTaskId(todo?.id)
  };

  const saveEditedTaskButtonHandler = () => {
    
  };

  return (
    <>
      {!isEditing ? (
        <button
          className="bg-blue-700 py-2 px-3 rounded-md text-gray-300 hover:cursor-pointer"
          onClick={editButtonHandler}
        >
          Edit
        </button>
      ) : (
        <button
          className="bg-green-700 py-2 px-3 rounded-md text-gray-300 hover:cursor-pointer"
          onClick={saveEditedTaskButtonHandler}
        >
          Save
        </button>
      )}
    </>
  );
};

export default TodoEditButton;
