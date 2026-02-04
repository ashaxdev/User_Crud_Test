# React User CRUD Application

A simple React-based CRUD (Create, Read, Update, Delete) web application to manage user data.  
The application is designed with **extensibility and clean architecture** in mind, allowing new fields to be added with minimal code changes.

---

## 🚀 Tech Stack

- React (Vite)
- TypeScript
- Material UI (MUI)
- Axios
- JSON Server (Mock API)

---

## ✨ Features

- Create, Read, Update, Delete users
- Input validation with required fields
- Schema-driven dynamic form
- Clean and user-friendly UI
- Type-safe code using TypeScript
- Easy to extend with new fields
- Mock API using JSON Server

---

## 📁 Project Structure

src/
├── api/ # API service layer
├── components/ # Reusable UI components
├── config/ # Form schema configuration
├── pages/ # Page-level components
├── types/ # TypeScript interfaces


---

## 🧑‍💻 User Form Fields

- First Name (Required)
- Last Name (Required)
- Phone Number (Required, 10 digits)
- Email Address (Required)

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone <your-github-repo-url>
cd user-crud-app
2️⃣ Install dependencies
npm install
3️⃣ Start the mock API (JSON Server)
npx json-server --watch db.json --port 3001
API Endpoint:

http://localhost:3001/users
4️⃣ Start the React development server
npm run dev
Application URL:

http://localhost:5173
🔁 CRUD Operations
Create – Add a new user using the form

Read – View all users in the list

Update – Edit an existing user

Delete – Remove a user from the list

➕ How to Add New Fields (Extensibility)
This project uses a schema-driven form approach, so adding new fields is easy.

Step 1: Update form schema
Edit the file:

src/config/userFormSchema.ts
Example:

{
  name: "address",
  label: "Address",
  type: "text",
  required: false
}
Step 2: Update User interface
Edit:

src/types/User.ts

address?: string;

✅ No other UI or logic changes are required.

🧠 Design Decisions
Schema-based form rendering for scalability

Centralized API handling using Axios

Separation of concerns (UI, API, types)

Material UI for consistent design

TypeScript for better maintainability and safety

🌐 Deployment
The application can be deployed on:

Vercel

Build command:

npm run build

📌 Assumptions
JSON Server is used as a mock backend

Backend API follows REST conventions

Focus is on frontend architecture and extensibility

