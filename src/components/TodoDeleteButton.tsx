import { useDispatch } from "react-redux";
import { removeTask } from "../redux/slices/todoSlice";
import { AppDispatch } from "../redux/store";

interface DeleteTaskButtonProps {
  id: string;
}

const TodoDeleteButton: React.FC<DeleteTaskButtonProps> = ({ id }) => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteTaskHandler = () => {
    dispatch(removeTask(id));
  };

  return (
    <button
      className="bg-red-700 py-2 px-3 rounded-md text-gray-300 hover:cursor-pointer"
      onClick={deleteTaskHandler}
    >
      Delete
    </button>
  );
};

export default TodoDeleteButton;
