# 🎓 Student Manager Dashboard

An elite, high-performance administrative single-page dashboard built using React.js and Vite. This application provides real-time state manipulation to create, read, update, and delete student data blocks. It features inline client-side form validation, dynamic string-matching search engines, multi-tier selector filtering pipelines, a custom auto-timed Toast notification module, and local browser cache memory backup synchronization.

---

### 🚀 Live Deployment
👉 **[Click Here to View Live Student Dashboard](https://06-student-dashboard-react.vercel.app/)**

---

### 🎮 Component Hierarchy & Data Flow Diagram

The dashboard follows a strict uni-directional data pipeline architecture managed via centralized states in the root shell:

```text
                           [App.jsx]
             (Global State Engine & Data Hydration)
             /                 |                  \
            /                  |                   \
     [Header.jsx]       [StudentForm.jsx]     [StudentTable.jsx]
 (Dynamic Badge Count) (Controlled Inputs)   (Search, Filters, Map)
                                                   /          \
                                                  /            \
                                            [Badge Styles]  [Toast.jsx]
