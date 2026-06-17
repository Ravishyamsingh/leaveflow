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

> 📸 Screenshots / demo video available in the `/demo` folder.

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

## 🎨 UI/UX Design System

LeaveFlow follows a deliberate design language built for clarity, speed, and professional feel — inspired by modern SaaS products like Linear and Vercel.

### Aesthetic: Dark Luxury + Minimalism

The dashboard uses a **dark luxury** aesthetic — deep near-black backgrounds that make status badges, stat cards, and action buttons pop with high contrast. The login/auth pages use a clean **minimalist** light mode to feel welcoming on first visit.

| Layer | Color | Usage |
|-------|-------|-------|
| Page Background | `#0D0D1A` | Main dark surface |
| Card / Panel | `#111827` | Elevated containers |
| Border | `rgba(255,255,255,0.08)` | Subtle separators |
| Primary Text | `#F1F1EE` | Headings & labels |
| Muted Text | `#888888` | Captions & meta |
| Accent (CTA) | `#2563EB` | Buttons, active states, highlights only |

> **60-30-10 Rule applied:** `#0D0D1A` dominates 60% as the base. `#111827` cards occupy 30%. `#2563EB` electric blue is used for 10% — CTAs, active nav, status badges only.

---

### Layout: Sidebar + Content (Dashboard)

LeaveFlow uses the **Sidebar + Content** layout pattern — the standard for SaaS dashboards:

```
┌─────────────────────────────────────────────┐
│  SIDEBAR (240px fixed)  │  CONTENT AREA      │
│                         │                    │
│  LeaveFlow logo         │  Top header bar    │
│  ─────────────────      │  ─────────────     │
│  → Dashboard            │  Stat cards row    │
│  → Apply Leave          │                    │
│  → My Requests          │  Leave table       │
│  → Settings             │                    │
│  ─────────────────      │                    │
│  User avatar + name     │                    │
└─────────────────────────────────────────────┘
```

- Sidebar: `240px`, `position: sticky`, `height: 100vh`, dark `#111827`
- Content area: `flex-1`, light gray `#F9FAFB` (light mode) / `#0D0D1A` (dark mode)
- On mobile: sidebar collapses behind a hamburger menu with fullscreen overlay

---

### Navigation: Sticky Frosted Navbar (Auth Pages)

On public pages (Login / Register), a **sticky frosted-glass navbar** is used:

- Transparent at top → transitions to `rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)` on scroll past 60px
- Smooth `0.3s` transition on background and blur
- Mobile: hamburger icon replaces nav links

---

### Typography System

Font pairing: **Syne** (headings) + **Inter** (body) — the Tech/SaaS combination for a clean, functional feel.

| Token | Value | Usage |
|-------|-------|-------|
| Display | `clamp(40px, 5vw, 64px)` · weight 700 · tracking `-0.03em` | Page hero titles |
| H1 | `32px` · weight 700 | Dashboard section headings |
| H2 | `24px` · weight 600 | Card titles |
| Body | `16px` · weight 400 · line-height `1.7` | Paragraphs, descriptions |
| Label | `13px` · weight 500 · uppercase | Table headers, meta info |

- Negative letter-spacing (`-0.02em` to `-0.04em`) on large headings for modern, tight feel
- Key stat numbers on dashboard use **display-size** type with gradient text treatment

---

### Component Patterns

#### Status Badges
Leave status uses color-coded pill badges — not plain text:

| Status | Badge Color |
|--------|-------------|
| `PENDING` | Amber `#F59E0B` bg at 15% opacity, amber text |
| `APPROVED` | Green `#10B981` bg at 15% opacity, green text |
| `REJECTED` | Red `#EF4444` bg at 15% opacity, red text |

#### Stat Cards (Admin Dashboard)
4 stat cards in a row using **bento-style** varied treatments:
- Each card: `#111827` background, `1px border rgba(255,255,255,0.08)`, `border-radius: 12px`
- Large display number with gradient text, label below in muted gray
- Hover: `transform: scale(1.02)`, `0.25s ease`

#### Leave Request Cards / Table Rows
- Hover lift: `transform: translateY(-2px)` + subtle shadow increase
- Row click expands inline detail (accordion pattern) — no navigation away
- Action buttons (Approve / Reject) animate with `0.2s` scale on hover

#### Forms (Apply Leave)
- Clean input fields: `border: 1px solid rgba(255,255,255,0.12)`, focus ring in `#2563EB`
- Date picker range with visual calendar
- Submit CTA: `#2563EB` filled button with `box-shadow: 0 0 20px rgba(37,99,235,0.3)` glow

---

### Scroll & Animation

| Interaction | Animation |
|-------------|-----------|
| Page load | Cards fade up: `opacity: 0 → 1`, `translateY(30px → 0)`, staggered `0.1s` per card |
| Stat counter | Numbers count up from 0 on first view (IntersectionObserver triggered) |
| Route change | Fade transition `0.2s ease` between pages |
| Button hover | `scale(1.03)` + brightness increase `0.15s` |
| Modal open | `scale(0.92) → scale(1)` + `opacity: 0 → 1`, `0.25s ease` |
| Toast notifications | Slide in from top-right, auto-dismiss after 3s |

---

### Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `< 768px` | Sidebar hidden, hamburger menu, single column |
| `768px – 1024px` | Sidebar collapses to icon-only (64px), 2-col grid |
| `> 1024px` | Full sidebar (240px), 3–4 col bento grid |

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

---

## 🤖 AI Usage

AI was an integral part of this project's development — not just for code generation, but for thinking through architecture, debugging, and writing production-ready boilerplate fast.

### How Claude (AI) was used:

| Area | Usage |
|------|-------|
| **Architecture Design** | Prompted Claude to suggest the folder structure for a scalable MERN RBAC app |
| **Redux Toolkit Slices** | Generated initial `authSlice.ts` and `leaveSlice.ts` with async thunks, then refined manually |
| **JWT Middleware** | Used AI to write `auth.js` and `role.js` middleware with proper error handling patterns |
| **Mongoose Models** | Generated `User.js` and `Leave.js` schemas; tweaked validation rules manually |
| **UI/UX Design System** | Used AI with *The Vibe Coder's Web Design Guide* to define the dark luxury aesthetic, 60-30-10 color rule, Syne + Inter font pairing, bento-style stat cards, status badge system, and scroll-triggered animations |
| **Tailwind UI Components** | Used Claude to generate reusable card, badge, status pill, and table components with hover states and transitions |
| **Prompt used for UI** | *"Build a dark luxury SaaS dashboard (aesthetic) with a sidebar+content layout (layout) where stat cards fade up on load (animation), using `#0D0D1A` near-black background, `#2563EB` electric blue accent, Syne headings + Inter body"* |
| **README** | Structured and drafted with AI assistance, then customized |
| **Debugging** | Pasted error logs into Claude to identify CORS issues and JWT expiry edge cases |

> AI tools used: **Claude (Anthropic)** via claude.ai  
> Design reference: **The Vibe Coder's Web Design Guide** (aesthetics, layout patterns, animation, typography, color theory)

---

## 🧠 Assumptions

1. Each employee starts with **20 days** of annual leave balance by default.
2. An employee **cannot apply for overlapping leave dates** — validation is enforced on the backend.
3. Only users with `role: "admin"` can access admin routes — set manually in DB or via a seed script.
4. Leave types supported: `Casual`, `Sick`, `Earned` — extendable via constants.
5. No email notifications in this version — status updates are visible in the dashboard.
6. JWT token is stored in `localStorage` for simplicity (can be moved to `httpOnly` cookies in production).

---

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
[LinkedIn](https://linkedin.com/in/your-profile) • [GitHub](https://github.com/your-username)

---

## 📬 Submission

- **GitHub:** https://github.com/your-username/leaveflow
- **Demo:** `/demo` folder (screenshots + video)
- **Submitted to:** Care@nrolled.com
