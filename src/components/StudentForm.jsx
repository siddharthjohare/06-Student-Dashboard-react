import React, { useState, useEffect } from "react";

function StudentForm({ onSave, editingStudent, onCancelEdit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    grade: "A",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    course: false,
  });

  // Sync editing hook data to form inputs
  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        email: editingStudent.email,
        course: editingStudent.course,
        grade: editingStudent.grade,
      });
    } else {
      setFormData({ name: "", email: "", course: "", grade: "A" });
    }
    setErrors({ name: false, email: false, course: false });
  }, [editingStudent]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: false })); // clear error while typing
  };

  const validate = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !formData.email.includes("@"),
      course: !formData.course,
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.course;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSave(formData);
    setFormData({ name: "", email: "", course: "", grade: "A" });
  };

  return (
    <div className="form-card">
      <h2>{editingStudent ? "✏️ Edit Student" : "➕ Add Student"}</h2>

      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Rahul Sharma"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error-msg">Name is required</div>}
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          id="email"
          placeholder="e.g. rahul@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <div className="error-msg">Valid email is required</div>
        )}
      </div>

      <div className="form-group">
        <label>Course *</label>
        <select id="course" value={formData.course} onChange={handleChange}>
          <option value="">-- Select Course --</option>
          <option value="React.js">React.js</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="Data Science">Data Science</option>
        </select>
        {errors.course && (
          <div className="error-msg">Please select a course</div>
        )}
      </div>

      <div class="form-group">
        <label>Grade</label>
        <select id="grade" value={formData.grade} onChange={handleChange}>
          <option value="A">A — Excellent</option>
          <option value="B">B — Good</option>
          <option value="C">C — Average</option>
          <option value="F">F — Fail</option>
        </select>
      </div>

      <button
        className={`btn-submit ${editingStudent ? "update" : ""}`}
        onClick={handleSubmit}
      >
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

      {editingStudent && (
        <button className="btn-cancel" onClick={onCancelEdit}>
          Cancel Edit
        </button>
      )}
    </div>
  );
}

export default StudentForm;
