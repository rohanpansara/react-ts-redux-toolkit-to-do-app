import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import ApplicationHeaderLogos from "./components/ApplicationHeaderLogos";
import TodoTable from "./components/TodoTable";

function App() {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gray-200 p-5 gap-5">
        <div className="w-[95%] flex justify-between items-center bg-gray-800 border-[1px] border-gray-500 px-6 py-3 rounded-md">
          <span className="text-gray-200 text-lg font-semibold">Todo App</span>
          <span className="text-gray-200 text-lg font-semibold">
            <ApplicationHeaderLogos />
          </span>
        </div>

        <div className="w-fit flex justify-between items-center border-[1px] border-gray-300 rounded-md p-2 px-3">
          <AddTaskForm />
        </div>

        <div className="w-[80%] flex-col justify-center items-center px-6 py-3 rounded-md">
          <div className="w-full flex justify-start items-center pb-3">
            <span className="font-semibold text-sm text-gray-500">
              {currentDate}.
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
