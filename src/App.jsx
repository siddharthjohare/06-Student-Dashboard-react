import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Toast from "./components/Toast";
import "./App.css";

function App() {
  // ─── 1. State Initialization with LocalStorage ───
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("student_data");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            course: "React.js",
            grade: "A",
          },
          {
            id: 2,
            name: "Priya Verma",
            email: "priya@gmail.com",
            course: "JavaScript",
            grade: "B",
          },
        ];
  });

  const [search, setSearch] = useState("");
  const [filterCourse, setFilterCourse] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  // Toast notification state
  const [toast, setToast] = useState({
    show: false,
    message: "",
    isError: false,
  });

  // ─── 2. LOCALSTORAGE SYNC ───
  useEffect(() => {
    localStorage.setItem("student_data", JSON.stringify(students));
  }, [students]);

  // ─── 3. TOAST SYSTEM CONTROLLER ───
  const showNotification = (message, isError = false) => {
    setToast({ show: true, message, isError });
    setTimeout(() => {
      setToast({ show: false, message: "", isError: false });
    }, 2500); // Auto-hide the toast after 2.5 seconds.
  };

  // ─── 4. CRUD OPERATIONS (HANDLERS) ───

  // CREATE & UPDATE (Save Handler)
  const handleSaveStudent = (formData) => {
    if (editingStudent) {
      // UPDATE FLOW
      setStudents((prev) =>
        prev.map((s) =>
          s.id === editingStudent.id ? { ...s, ...formData } : s,
        ),
      );
      showNotification("🎓 Student records updated successfully!");
      setEditingStudent(null); //Reset the form after successful submission.
    } else {
      // CREATE FLOW
      const newStudent = {
        id: Date.now(), // Generate Unique Numeric ID
        ...formData,
      };
      setStudents((prev) => [...prev, newStudent]);
      showNotification("✅ New student added to database!");
    }
  };

  // DELETE FLOW
  const handleDeleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student data?")) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
      showNotification("🗑️ Student profile deleted!", true);

      //Safeguard: Handle the case where the currently edited record is deleted directly.
      if (editingStudent?.id === id) {
        setEditingStudent(null);
      }
    }
  };

  // TRIGGER EDITING ROUTE
  const handleEditStart = (student) => {
    setEditingStudent(student);
  };

  // CANCEL EDIT
  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  // ─── 5. FILTER & SEARCH ENGINE ───
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filterCourse ? student.course === filterCourse : true;
    return matchesSearch && matchesFilter;
  });

  // Calculate global aggregate statistics for UI nodes
  const totalRawCount = students.length;
  const gradeACount = students.filter((s) => s.grade === "A").length;

  return (
    <div className="app-container">
      {/* Dynamic Header Badge Count */}
      <Header totalCount={totalRawCount} />

      <div className="app-body">
        {/* Left Side Section: Controller Form Component */}
        <StudentForm
          onSave={handleSaveStudent}
          editingStudent={editingStudent}
          onCancelEdit={handleCancelEdit}
        />

        {/* Right Side Section: Live Student Data Table */}
        <StudentTable
          students={filteredStudents}
          totalRawCount={totalRawCount}
          search={search}
          setSearch={setSearch}
          filterCourse={filterCourse}
          setFilterCourse={setFilterCourse}
          onEditStart={handleEditStart}
          onDelete={handleDeleteStudent}
          gradeACount={gradeACount}
        />
      </div>

      {/* Toggle notification systems using conditional rendering */}
      {toast.show && <Toast message={toast.message} isError={toast.isError} />}
    </div>
  );
}

export default App;
