import { useDispatch } from "react-redux";
import { updateTask } from "../redux/slices/todoSlice";
import { AppDispatch } from "../redux/store";

interface TodoEditButtonProps {
  currentTaskId: string;
  taskToEditId: string;
  updatedTaskValue: string;
  isEditing: boolean;
  setIsEditing: (bool: boolean) => void;
  handleEditButtonClick: (id: string, task: string) => void;
}

const TodoEditButton: React.FC<TodoEditButtonProps> = ({
  currentTaskId,
  taskToEditId,
  updatedTaskValue,
  isEditing,
  setIsEditing,
  handleEditButtonClick,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const saveButtonHandler = () => {
    if (!updatedTaskValue.trim()) return;
    dispatch(updateTask({ id: taskToEditId, task: updatedTaskValue.trim() }));
    setIsEditing(false);
  };

  return (
    <>
      {isEditing && currentTaskId === taskToEditId ? (
        <button
          className="bg-green-700 py-2 px-3 rounded-md text-gray-300 hover:cursor-pointer"
          onClick={saveButtonHandler}
        >
          Save
        </button>
      ) : (
        <button
          className="bg-blue-700 py-2 px-3 rounded-md text-gray-300 hover:cursor-pointer"
          onClick={() => handleEditButtonClick(currentTaskId, updatedTaskValue)}
        >
          Edit
        </button>
      )}
    </>
  );
};

export default TodoEditButton;
