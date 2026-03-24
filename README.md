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
