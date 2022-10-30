import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toogleShow":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

function StateReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div className="StateReducer">
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toogleShow" });
        }}
      >
        Click me
      </button>
      {state.showText && <p>I am clicked {state.count}</p>}
    </div>
  );
}

export default StateReducer;
