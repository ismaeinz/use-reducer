import React, { useReducer } from "react";
import Props from "./components/Props";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    case "tgColor":
      return { ...state, color: !state.color };

    default:
      console.log("default");
  }
};

export const initialState = { count: 0, userInput: "", color: false };
const App = () => {
  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main
      className="App"
      style={{
        color: state.color ? "#FFF" : "#FFF952",
      }}
    >
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({
            type: "newUserInput",
            payload: e.target.value,
          })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <section>
        <button
          onClick={() => {
            dispatch({
              type: "decrement",
            });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "increment",
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "tgColor",
            });
          }}
        >
          color
        </button>
      </section>
      <br />
      <br />
      <p>{state.userInput}</p>
      <Props state={state} />
    </main>
  );
};

export default App;
