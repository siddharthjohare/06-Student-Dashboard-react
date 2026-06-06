import React from "react";

function Toast({ message, isError }) {
  return (
    <div className={`toast show ${isError ? "error" : ""}`}>{message}</div>
  );
}

export default Toast;
