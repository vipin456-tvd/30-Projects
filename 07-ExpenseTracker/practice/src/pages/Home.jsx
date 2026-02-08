/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    console.log("Submit");
    const newTask = {
      id: Date.now(),
      name: input,
      complete: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  return (
    <div className="p-5 d-flex flex-column justify-content-center w-100 border border-black border-2">
      <div className="inputDiv d-flex justify-content-center align-content-center gap-2">
        <input
          type="text"
          className="w-100 p-2"
          placeholder="Enter Task"
          value={input}
          onChange={handleInput}
        />
        <button className="px-3" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
      <div className="task-list mt-3 d-block">
        {tasks.map((task)=>(
        <div key={task.id} className="listItem d-flex justify-content-between align-content-center mb-1 border-1 border p-2">
          <p className="m-0">{task.name}</p>
          <div className="btns">
            <button>Complete</button>
            <button>Delete</button>
          </div>
        </div>
        ))}

      </div>

      <div >
        <h1>Popup Example</h1>
        
      </div>
    </div>
  );
};

export default Home;
