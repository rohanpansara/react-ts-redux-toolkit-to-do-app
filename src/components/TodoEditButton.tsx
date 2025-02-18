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
    setIsEditing(false); // Close edit mode
  };

  return (
    <>
      {isEditing && currentTaskId === taskToEditId ? (
        <button
          className="bg-[#60992D] py-1 px-2 rounded-md text-gray-300 hover:cursor-pointer transition-transform"
          onClick={saveButtonHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            className="fill-[#263d12]"
          >
            <path d="M 43.470703 8.9863281 A 1.50015 1.50015 0 0 0 42.439453 9.4394531 L 16.5 35.378906 L 5.5605469 24.439453 A 1.50015 1.50015 0 1 0 3.4394531 26.560547 L 15.439453 38.560547 A 1.50015 1.50015 0 0 0 17.560547 38.560547 L 44.560547 11.560547 A 1.50015 1.50015 0 0 0 43.470703 8.9863281 z"></path>
          </svg>
        </button>
      ) : (
        <button
          className="bg-[#b8b4f7] py-1 px-2 rounded-md text-gray-300 hover:cursor-pointer transition-transform"
          onClick={() => handleEditButtonClick(currentTaskId, updatedTaskValue)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            className="fill-[#0C0A3E]"
          >
            <path d="M38.657 18.536l2.44-2.44c2.534-2.534 2.534-6.658 0-9.193-1.227-1.226-2.858-1.9-4.597-1.9s-3.371.675-4.597 1.901l-2.439 2.439L38.657 18.536zM27.343 11.464L9.274 29.533c-.385.385-.678.86-.848 1.375L5.076 41.029c-.179.538-.038 1.131.363 1.532C5.726 42.847 6.108 43 6.5 43c.158 0 .317-.025.472-.076l10.118-3.351c.517-.17.993-.463 1.378-.849l18.068-18.068L27.343 11.464z"></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default TodoEditButton;
