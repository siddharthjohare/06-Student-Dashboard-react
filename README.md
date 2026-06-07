# 🎓 Student Manager Dashboard

An elite, high-performance administrative single-page dashboard built using React.js and Vite. This application provides real-time state manipulation to create, read, update, and delete student data blocks. It features inline client-side form validation, dynamic string-matching search engines, multi-tier selector filtering pipelines, a custom auto-timed Toast notification module, and local browser cache memory backup synchronization.

---

### 🚀 Live Deployment
👉 **[Click Here to View Live Student Dashboard](https://06-student-dashboard-react.vercel.app/)**

---

**🛠️ Technical Implementation & Core Concepts**
This repository serves as a practical showcase of production-ready frontend state management systems, semantic CSS Grid scaling, and component decoupling:

State Initializer Layout (Lazy Hydration): Programmed a performance-optimized state initialization callback inside useState to safely scan and parse the client's localStorage stream (student_data) instantly upon load, safely defaulting to mock static arrays if empty.

Complex State Synchronization (useEffect): Managed automated cross-component data persistence pipelines by binding a declarative state hook to track modifications on the core student array matrix, executing automatic JSON.stringify updates to browser caches.

**Advanced Mutation Flows (CRUD Lifecycle):**

**Create:** Instantiates new structured items by appending high-precision numeric keys generated via Date.now().

**Update:** Leveraged conditional array mapping transformations (prev.map) to dynamically patch record values while keeping immutable reference signatures intact.

**Delete:** Configured explicit user validation loops (window.confirm) to purge targeted data records using array filtering primitives (prev.filter).

**Asynchronous Timeout Interceptors:** Developed a custom alert dispatching algorithm (showNotification) that dynamically switches state parameters to control a decoupled Toast UI overlay, utilizing setTimeout bindings to safely clear the active node from the viewport tree after a 2.5-second runtime.

**Real-time Filter & Search Engine:** Authored fluid array querying matrices combining sequential string methods (.toLowerCase() and .includes()) alongside tertiary course filter selectors to deliver immediate, non-blocking table results.

**Data Validation & Error Boundaries:** Engineered strict, real-time input check blocks tracking specific error categories (e.g., forcing missing field flags and evaluating structurally valid email formats via checking @ inclusions) to prevent incorrect data from being submitted to the database.

**Semantic CSS Grid Viewport Layout:** Authored a responsive, two-column grid distribution wrapper (340px 1fr) that smoothly shifts to an aligned vertical single-column profile on mobile viewports below 768px, featuring micro-interaction badge colors based on character-grade scores (badge-A, badge-B, etc.).

**📦 Tech Stack Used**
**Core Framework:** React.js (Functional Components Architecture)

**Build Bundler:** Vite Bundler Engine

**Styling Foundation:** Custom CSS3 Variables (CSS Grid, Flexbox Layouts, Fluid Animations)

**Caching Interface:** Native Browser LocalStorage Web API

**State Control Hooks:** useState, useEffect Core React Hooks

**📂 Codebase Folder Layout**
**src/App.jsx** - Master system container housing structural state nodes, algorithmic CRUD hooks, and data synchronization triggers.

**src/components/Header.jsx** - Presentation view displaying real-time aggregated headcounts of current database tracking entries.

**src/components/StudentForm.jsx** - Controlled input component regulating structural text validations, dynamic state clearing, and editing data injections.

**src/components/StudentTable.jsx** - Core rendering grid processing structural filter fields, iterating record loops via .map(), and displaying calculated aggregate statistics.

**src/components/Toast.jsx** - Reusable modal system utilizing dynamic, state-driven CSS transitions to provide intuitive user interaction feedback.

**src/App.css** - Custom styling stylesheet managing uniform fluid grid systems, contextual badge profiles, and media breakpoint adapters.

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
