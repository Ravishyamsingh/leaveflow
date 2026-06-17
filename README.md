# LeaveFlow 🌿

> A modern Leave Management System built for teams — streamlining leave requests, approvals, and tracking in one clean dashboard.

---

## 📌 Overview

LeaveFlow is a full-stack Leave Management System with role-based access control (RBAC) for **Employees** and **Admins**.

- **Employees** can apply for leave, track their balance, and monitor request status in real time.
- **Admins** can view all requests, approve or reject them, and manage employee leave data from a dedicated dashboard.

Built as part of the NROLLED IT Team Selection Assignment.

## Project Theory (extracted)

Nrolled is positioned as an operating system for Canadian hospitality teams: staff smarter, connect deeper, and run leaner with staffing, CRM, workforce management, and payroll in one focused platform.

Product messaging:
- **Headline:** The Operating System for Hospitality
- **Subtext:** Staff smarter, connect deeper, and run leaner — staffing, CRM, workforce management, and payroll built for Canadian hospitality.
- **Primary CTA:** Get Started
- **Secondary CTA:** Watch Demo

Benefits:
- **Hire smarter:** smart staffing tools; candidate relationship management; reduced time-to-hire.
- **Run leaner:** workforce management; automated payroll; Canadian compliance built in.

Product direction:
- The Operating System for Hospitality
- Staffing and CRM for smarter hiring
- Workforce management and payroll for leaner operations
- Canadian compliance built into the product experience

FAQ topics:
- What is Nrolled?
- Is Nrolled built for Canadian businesses?
- What modules are included?
- How does billing work?

Tech stack (summary): Next.js 14, TypeScript, React 18, Tailwind CSS, Headless UI, Heroicons, next-themes, npm.

---

## 🚀 Live Demo

| Service    | URL                                      |
|------------|------------------------------------------|
| Frontend   | https://leaveflow.vercel.app             |
| Backend    | https://leaveflow-api.onrender.com       |

## 📸 Screenshots

### Home Page
![LeaveFlow home page](public/img/home%20page%20screenshoot.png)

### User Dashboard
![LeaveFlow user dashboard](public/img/user%20dashboard.png)

### Admin Dashboard
![LeaveFlow admin dashboard](public/img/admin%20dashboard.png)

---

## 🛠️ Tech Stack

### Frontend
| Tool | Purpose |
|------|---------|
| React 18 + TypeScript | UI framework |
| Redux Toolkit | Global state management |
| Tailwind CSS | Styling |
| React Router v6 | Client-side routing |
| Axios | HTTP requests |
| React Hot Toast | Notifications |

### Backend
| Tool | Purpose |
|------|---------|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database & ODM |
| JWT | Authentication & authorization |
| bcryptjs | Password hashing |
| dotenv | Environment config |
| CORS | Cross-origin handling |

### Deployment
| Service | What |
|---------|------|
| Vercel | Frontend hosting |
| Render | Backend hosting |
| MongoDB Atlas | Cloud database |

---

## 🏗️ Architecture

```
leaveflow/
├── client/                        # React + TypeScript frontend
│   ├── src/
│   │   ├── app/                   # Redux store setup
│   │   │   └── store.ts
│   │   ├── features/              # Redux slices
│   │   │   ├── auth/
│   │   │   │   └── authSlice.ts
│   │   │   └── leave/
│   │   │       └── leaveSlice.ts
│   │   ├── pages/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── employee/
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── ApplyLeave.tsx
│   │   │   │   └── MyLeaves.tsx
│   │   │   └── admin/
│   │   │       ├── Dashboard.tsx
│   │   │       └── AllRequests.tsx
│   │   ├── components/            # Reusable UI components
│   │   ├── services/              # Axios API calls
│   │   └── utils/                 # Helpers & constants
│   └── tailwind.config.js
│
└── server/                        # Node.js + Express backend
    ├── config/
    │   └── db.js                  # MongoDB connection
    ├── controllers/
    │   ├── authController.js

# leaveflow
    │   └── leaveController.js
    ├── middleware/
    │   ├── auth.js                # JWT verification
    │   └── role.js                # RBAC middleware
    ├── models/
    │   ├── User.js
    │   └── Leave.js
    ├── routes/
    │   ├── authRoutes.js
    │   └── leaveRoutes.js
    └── server.js
```

### Request Flow

```
Client (React/Redux)
      │
      │  HTTP (Axios + JWT Header)
      ▼
Express API (Node.js)
      │
      ├── Auth Middleware (verify JWT)
      ├── Role Middleware (employee / admin)
      │
      ▼
MongoDB Atlas (Mongoose)
```

---

## ✨ Features

### Employee
- [x] Register & Login (JWT-based)
- [x] Apply for leave (type, from, to, reason)
- [x] View all personal leave requests with status
- [x] View remaining leave balance
- [x] Status badge: `PENDING` → `APPROVED` / `REJECTED`

### Admin
- [x] View all employee leave requests
- [x] Approve or Reject any request
- [x] Filter requests by status / employee
- [x] Dashboard with summary stats

---


### Design Inspiration References

- [Vercel Dashboard](https://vercel.com/dashboard) — dark luxury SaaS layout reference
- [Linear.app](https://linear.app) — sidebar + content + dark mode done perfectly
- [Tailwind UI Application UI](https://tailwindui.com/components#application-ui) — component structure

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/callback/credentials` | Credentials login via NextAuth | Public |

### Leave
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/leaves` | Apply for leave | Employee |
| GET | `/api/leaves` | Get own requests, or all requests for admin | Private |
| PATCH | `/api/leaves/:id` | Approve / reject leave status | Admin |

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

---

### 1. Install

```bash
npm install
```

---

### 2. Environment

```env
MONGO_URI=your_mongodb_atlas_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=optional_google_client_id
GOOGLE_CLIENT_SECRET=optional_google_client_secret
```

Save these in `.env.local`.

---

### 3. Seed Admin

```bash
npm run seed:admin
```

Admin login:

```text
Email: admin@leaveflow.local
Password: password
```

---

### 4. Run

```bash
npm run dev
```

App runs at: `http://localhost:3000`

Admin dashboard: `/admin`

Useful checks: `npm run lint`, `npx tsc --noEmit`, `npm run build`

## 🧩 Challenges

- **RBAC with JWT:** Cleanly separating employee vs admin route access without over-engineering the middleware took a few iterations.
- **Redux + async flows:** Managing loading/error states across multiple API calls (apply, fetch, update) with Redux Toolkit's `createAsyncThunk` required careful slice design.
- **Leave balance deduction logic:** Deciding when to deduct balance (on approval, not on apply) and how to handle rejected/cancelled leaves needed explicit state handling in the model.
- **CORS on Render + Vercel:** Configuring allowed origins dynamically for development vs production environments.

---

## 🔮 Future Improvements

- [ ] Email notifications (Nodemailer / SendGrid) on approval/rejection
- [ ] Admin dashboard with charts (leave trends, department-wise stats)
- [ ] Leave cancellation by employee (before approval)
- [ ] Multiple leave types with separate balances
- [ ] HR Manager role (third tier)
- [ ] Export leave reports as CSV/PDF
- [ ] Mobile-responsive polish
- [ ] `httpOnly` cookie-based auth for better security

---

## 📁 Git Workflow

Branches used:
- `main` — production-ready code
- `dev` — active development
- `feature/auth` — authentication module
- `feature/leave-flow` — leave apply & status logic
- `feature/admin-dashboard` — admin views

Commit convention: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`

---

## 👤 Author

**Ravi Shyam Singh**  
B.Tech CSE 2026 | Full Stack & AI Engineer  
[LinkedIn](https://www.linkedin.com/in/ravi-shyam-singh-790273367/) • [GitHub](https://github.com/Ravishyamsingh/leaveflow)

---
