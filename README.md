# LeaveFlow

A modern leave management system for employees and admins to manage leave requests, approvals, and balances.

## Screenshots

![LeaveFlow home page](public/img/home%20page%20screenshoot.png)

![LeaveFlow user dashboard](public/img/user%20dashboard.png)

![LeaveFlow admin dashboard](public/img/admin%20dashboard.png)

## Features

- Employee login, leave apply, request tracking, and leave balance view
- Admin dashboard to view, approve, and reject leave requests
- Role-based access for employees and admins
- Clean responsive UI with dark mode support

## Tech Stack

- Next.js, React, TypeScript
- Tailwind CSS, Headless UI, Heroicons, Lucide React
- NextAuth, MongoDB, Redux Toolkit

## Architecture
Simplified client‑server: Next.js frontend, NextAuth for auth, Redux Toolkit state, MongoDB backend via API routes.

## AI usage
AI assists in generating leave recommendations and auto‑responses (placeholder for future integration).

## Assumptions
- Users have a MongoDB instance.
- Environment variables are correctly set.
- Admin role exists.

## Run Locally

```bash
npm install
```

Create `.env.local`:

```env
MONGO_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=optional_google_client_id
GOOGLE_CLIENT_SECRET=optional_google_client_secret
```

Seed admin user:

```bash
npm run seed:admin
```

Start the app:

```bash
npm run dev
```

Open `http://localhost:3000`.

Admin login:

```text
Email: admin@leaveflow.local
Password: password
```

## Author

**Ravi Shyam Singh**  
[LinkedIn](https://www.linkedin.com/in/ravi-shyam-singh-790273367/) | [GitHub](https://github.com/Ravishyamsingh/leaveflow)
