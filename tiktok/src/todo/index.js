import { useState, useReducer, useRef } from "react";
import { ADD_JOB, SET_JOB, DELETE_JOB } from "./constants"
import reducer, { initState } from "./reducer"; 
import logger from "./logger";

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      ></input>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button
              onClick={() => {
                dispatch(deleteJob(index));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
