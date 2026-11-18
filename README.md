# Intro to Backend Assignment

A Node.js, Express, and MongoDB CRUD backend built for the backend tutorial assignment.

## Features

- MongoDB Atlas connection with Mongoose
- User registration, login, and logout APIs
- Bcrypt password hashing
- Post create, read, update, and delete APIs
- REST and tutorial-compatible post routes
- Request validation and consistent JSON errors

## Setup

1. Install Node.js (18 or newer).
2. Clone the repository and run `npm install`.
3. Create a MongoDB Atlas project and database cluster.
4. Copy `.env.example` to `.env`.
5. Replace `MONGODB_URI` with the connection string from MongoDB Atlas.
6. Start the server:

```bash
npm run dev
```

The API is available at `http://localhost:8000`.

## API endpoints

### Health

- `GET /health`

### Users

- `POST /api/v1/users/register`
- `POST /api/v1/users/login`
- `POST /api/v1/users/logout`

Example registration body:

```json
{
  "username": "demo-user",
  "email": "demo@example.com",
  "password": "secret123"
}
```

### Posts

- `POST /api/v1/posts/create`
- `GET /api/v1/posts`
- `GET /api/v1/posts/:id`
- `PATCH /api/v1/posts/:id`
- `DELETE /api/v1/posts/:id`

Tutorial-compatible aliases are also available:

- `GET /api/v1/posts/getPosts`
- `PATCH /api/v1/posts/update/:id`
- `DELETE /api/v1/posts/delete/:id`

Example post body:

```json
{
  "name": "Garv",
  "description": "Backend tutorial post",
  "age": 20
}
```

## Postman testing

Import `postman/backend-tutorial.postman_collection.json` into Postman Desktop. Set the collection variable `baseUrl` to `http://localhost:8000` and test the health, user, and post endpoints.
