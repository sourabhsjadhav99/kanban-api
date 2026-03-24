# Kanban Backend (API)

Express + MongoDB backend for the draggable Kanban board, implemented with MVC.

## Setup
1. Create `api/.env`.
2. Configure:
   - `PORT=5000`
   - `MONGO_URI=mongodb://127.0.0.1:27017/kanban_board` 
3. Install dependencies:

```bash
cd api
npm install
```

## Run
Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Default base URL: `http://localhost:5000`

## Seed Database
Run this when you want sample tasks inserted:

```bash
npm run seed
```

This clears current tasks and inserts starter records.

## API Endpoints
- `GET /api/tasks` - fetch all tasks
- `POST /api/tasks` - create task (`title`, `description`, `status`)
- `PATCH /api/tasks/:id/status` - update task status
- `DELETE /api/tasks/:id` - delete task

## Request/Response Table
| Method | Endpoint | Request Body | Success Response | Error Response |
|---|---|---|---|---|
| `GET` | `/api/tasks` | None | `200` -> `[{ "_id", "title", "description", "status", "createdAt", "updatedAt" }]` | `500` -> `{ "message": "Failed to fetch tasks", "error": "..." }` |
| `POST` | `/api/tasks` | `{ "title": "Task title", "description": "Optional", "status": "todo \| in-progress \| done" }` | `201` -> `{ "_id", "title", "description", "status", "createdAt", "updatedAt" }` | `400` -> `{ "message": "Title is required" }`, `500` -> `{ "message": "Failed to create task", "error": "..." }` |
| `PATCH` | `/api/tasks/:id/status` | `{ "status": "todo \| in-progress \| done" }` | `200` -> `{ "_id", "title", "description", "status", "createdAt", "updatedAt" }` | `400` -> `{ "message": "Invalid status value" }`, `404` -> `{ "message": "Task not found" }`, `500` -> `{ "message": "Failed to update task status", "error": "..." }` |
| `DELETE` | `/api/tasks/:id` | None | `200` -> `{ "message": "Task deleted successfully" }` | `404` -> `{ "message": "Task not found" }`, `500` -> `{ "message": "Failed to delete task", "error": "..." }` |
