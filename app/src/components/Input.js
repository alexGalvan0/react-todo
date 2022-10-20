import { useState } from "react";
import dayjs from "dayjs";

function Input({ taskTemplete, setData, data,title }) {
  const [userInput, setUserInput] = useState("");

  const addTask = () => {
    setUserInput("");
    const newTask = {
      ...taskTemplete,
      id: data.length + 1,
      text: userInput,
      status: "incomplete",
      created: `${dayjs().date(20)}`,
      duedate: "",
      update: "",
    };
    setData([...data.concat(newTask)]);
  };
  return (
    <div className="row mb-5">
      <h1 className="text-center">{title}</h1>
      <div className="col d-flex justify-content-center flex-row gap-2">
        <input
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          value={userInput}
        />
        <button onClick={addTask} className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
