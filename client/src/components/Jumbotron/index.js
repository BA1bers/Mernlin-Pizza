import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
      <h1>Hello</h1>
    </div>
  );
}

export default Jumbotron;
