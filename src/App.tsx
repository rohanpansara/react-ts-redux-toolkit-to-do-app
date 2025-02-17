import AddTaskForm from "./components/AddTaskForm";
import TodoTable from "./components/TodoTable";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-start items-center bg-gray-600 p-5 gap-5">
        <div className="w-fit flex justify-center items-center bg-gray-700 border-[1px] border-gray-500 px-6 py-3 rounded-md">
          <span className="text-gray-200 text-lg font-semibold">
            Todo App With React-TS and Redux-Toolkit
          </span>
        </div>

        <div className="w-fit flex justify-center items-center border-[1px] border-gray-500 pl-4 pr-6 py-3 rounded-md">
          <AddTaskForm />
        </div>

        <div className="w-full flex-col justify-center items-center px-6 py-3 rounded-md">
          <div className="w-full flex justify-start items-center pb-3">
            <span className="font-semibold text-sm text-gray-300">
              TODO List
            </span>
          </div>

          <div className="w-full flex flex-col">
            <TodoTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
