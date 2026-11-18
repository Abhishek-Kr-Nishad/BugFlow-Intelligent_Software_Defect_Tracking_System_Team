# BugFlow – Frontend

**BugFlow – Intelligent Software Defect Tracking System**

## 1. Project Overview

BugFlow is an Intelligent Software Defect Tracking System designed to simplify and improve the process of identifying, reporting, tracking, and managing software defects.

The frontend is developed using React.js and Vite. It provides a user-friendly and responsive interface through which users, developers, testers, and administrators can interact with the system.

The frontend communicates with the backend APIs to perform different operations related to defect management.

## 2. Technologies Used

- **React.js** – Building interactive user interfaces.
- **Vite** – Frontend development and build tool.
- **JavaScript** – Application functionality.
- **HTML5** – Web page structure.
- **CSS3** – Styling and responsive design.
- **ESLint** – Code quality and consistency.
- **npm** – Package management.
- **Git & GitHub** – Version control and collaboration.

## 3. Frontend Features

The following modules represent the planned frontend functionality:

### Authentication
- User Login
- User Registration (if supported)
- Logout
- Protected Routes
- JWT Authentication Integration

### Dashboard
- Overview of reported defects.
- Total issues.
- Open and closed issues.
- Pending issues.
- Issue statistics and visualizations.

### Issue Management
- Create new issues.
- View reported issues.
- Update issue details.
- Delete issues (based on permissions).
- Search and filter issues.
- Manage issue priority and status.

### Issue Details
- Issue title and description.
- Issue severity and priority.
- Assigned developer.
- Current issue status.
- Comments and activity history.

### User Management
- User profiles.
- Role-based interface.
- User information.
- Administrator user management.

### Reports and Analytics
- Issue statistics.
- Priority-wise defect analysis.
- Status-wise reports.
- Graphical representation of defect data.

### User Interface
- Responsive design.
- Navigation bar.
- Sidebar navigation.
- Reusable components.
- User-friendly forms and buttons.
- Error and success notifications.

## 4. Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── services/
│   ├── hooks/
│   ├── context/
│   ├── routes/
│   ├── styles/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 5. Installation and Setup

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Visual Studio Code
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/Abhishek-Kr-Nishad/BugFlow-Intelligent_Software_Defect_Tracking_System_Team.git
```

### Step 2: Navigate to the Frontend Directory

```bash
cd BugFlow-Intelligent_Software_Defect_Tracking_System_Team/frontend
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

### Step 5: Open in Browser

Open the following URL:

```text
http://localhost:5173/
```

## 6. Available Scripts

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |

## 7. Backend Integration

The frontend will communicate with the FastAPI backend through REST APIs.

Backend integration will support:

- User authentication.
- Issue creation and management.
- User and role management.
- Issue status updates.
- Comments and activity tracking.
- Reports and analytics.

## 8. Development Workflow

The project follows a collaborative Git workflow.

1. Create a feature branch.
2. Develop the assigned functionality.
3. Test the implementation locally.
4. Commit the changes.
5. Push the branch to GitHub.
6. Create a Pull Request.
7. Review and merge changes after approval.

## 9. Project Status

**Current Status:** Frontend Initialization Completed (React + Vite).

The initial frontend environment has been configured. Additional frontend modules and backend integration will be implemented progressively.

## 10. Contributors

Developed collaboratively by the BugFlow project team.

---

**Project Name:** BugFlow – Intelligent Software Defect Tracking System

**Frontend Technology:** React.js + Vite

**Backend Technology:** FastAPI

**Version Control:** Git & GitHub
