# Nooro Server - API Documentation
This project sets up a RESTful API using Express.js, Prisma, and MySQL. The API allows you to manage tasks, including creating, updating, retrieving, and deleting them from a MySQL database.


## Requirements
- Node.js >= 14.x
- MySQL >= 5.7
- Prisma >= 3.x


## Setup Instructions
Follow these steps to set up the server and the database.

### 1. Clone the Repository
Clone the repository to your local machine:

```
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
Install all the necessary dependencies:

```
npm install
```

### 3. Set Up Prisma and Database

#### Step 1: Create Your Own MySQL Database

Ensure MySQL is running on your machine. You can check the status with:

```
sudo systemctl status mysql
```

Then log in to MySQL to create your own database:

```
mysql -u root -p
```

Create a new database for your project (e.g., `nooro_tasks`):

```
CREATE DATABASE nooro_tasks;
```

#### Step 2: Update the .env File with Your Credentials

In the root of the project, you’ll find a `.env` file. Update the `DATABASE_URL` to include your own MySQL credentials. Example:

```
DATABASE_URL="mysql://<your_username>:<your_password>@localhost:3306/nooro_tasks"
```

Replace `<your_username>` with your MySQL username.
Replace `<your_password>` with your MySQL password.

If you're using a local MySQL server, the default `localhost:3306` should be fine. If you're using a different host or port, update accordingly.

#### Step 3: Run Prisma Migrations

Prisma will need to create the necessary tables in your database. You can run the migration command:

```
npx prisma migrate dev --name init
```

This command will apply the migration to your database and generate the Prisma Client for interacting with your data.

#### Step 4: Run the Prisma Generate Command

Generate Prisma Client to interact with the database:

```
npx prisma generate
```

### 4. Run the Server
Start the Express API server:

```
npm run dev
```

The API will be running at `http://localhost:4000`.

### 5. Testing the Endpoints
You can now test the following API endpoints using a tool like Postman or your browser:

- **Create a new task** (POST /api/tasks):
  - Request Body: `{ "title": "Task Title", "color": "blue" }`

- **Get all tasks** (GET /api/tasks):
  - Response: Returns an array of tasks.

- **Update a task** (PUT /api/tasks/:id):
  - Request Body: `{ "completed": true }`
  - Response: The updated task.

- **Delete a task** (DELETE /api/tasks/:id):
  - Response: Returns a confirmation message.

### 6. Using Prisma Client
Prisma Client is generated when you run the `prisma generate` command. You can use it in your application to query and manipulate the database.

You can use the `src/insert.Task.ts` file to insert a into the database using Prisma. You can run the file using:

```
npx ts-node src/insertTask.ts
```

### 7. Troubleshooting
If you face any issues with the database connection:

- Ensure that MySQL is running.
- Double-check the `DATABASE_URL` in the `.env` file.

If you encounter errors related to Prisma migrations, try running:

```
npx prisma migrate reset
```

This will reset the database and apply migrations again.
