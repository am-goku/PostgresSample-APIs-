
# Simple PostgreSQL API

This is a sample API project created to learn about PostgreSQL and basic API operations.

## Getting Started






### Deployment
#### Clone the Repository:

```bash
  git clone https://github.com/your-username/simple-postgresql-api.git
```

```bash
  cd simple-postgresql-api
  npm install
```

### Configure Database:

Create a PostgreSQL database named students.

Set up a .env file in the root directory with your PostgreSQL credentials:


```bash
  PG_PASS=your_postgresql_password
```

#### Run the Server:
To deploy this project run
```bash
  npm start
```

The server will be running on http://localhost:3000.

##

## API Routes
#### GET /api/v1/students: Retrieve a list of all students.

#### GET /api/v1/students/:id: Retrieve information about a specific student by ID.

#### POST /api/v1/students/add: Add a new student.

#### DELETE /api/v1/students/delete/:id: Delete a student by ID.

#### PUT /api/v1/students/update/:id: Update information for a student by ID.
