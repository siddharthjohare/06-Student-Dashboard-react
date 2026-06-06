import React from "react";

function StudentTable({
  students,
  totalRawCount,
  search,
  setSearch,
  filterCourse,
  setFilterCourse,
  onEditStart,
  onDelete,
  gradeACount,
}) {
  return (
    <div className="table-card">
      <div className="table-top">
        <h2>📋 Students List</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
          >
            <option value="">All Courses</option>
            <option value="React.js">React.js</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr className="empty-row">
              <td colSpan="6">No students found 😕</td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>
                  <strong>{student.name}</strong>
                </td>
                <td style={{ color: "#888" }}>{student.email}</td>
                <td>{student.course}</td>
                <td>
                  <span className={`badge badge-${student.grade}`}>
                    {student.grade}
                  </span>
                </td>
                <td>
                  <div className="action-btns">
                    <button
                      className="btn-edit"
                      onClick={() => onEditStart(student)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => onDelete(student.id)}
                    >
                      🗑️ Del
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="total-bar">
        <span>
          Showing {students.length} of {totalRawCount} students
        </span>
        <span>⭐ {gradeACount} Grade A students</span>
      </div>
    </div>
  );
}

export default StudentTable;
