import React from "react";

// This file exports the Input, and FormBtn components

export function Input(props) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

// Destructuring the type, className, children and onClick props, applying them to the button element
export function FormBtn({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}
