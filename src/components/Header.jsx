import React from "react";

function Header({ totalCount }) {
  return (
    <div className="app-header">
      <h1>🎓 Student Manager</h1>
      <span style={{ fontSize: "14px", opacity: 0.85 }}>
        {totalCount} {totalCount === 1 ? "student" : "students"}
      </span>
    </div>
  );
}

export default Header;
