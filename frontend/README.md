SoftVance Task Manager
A task management system that helps users create, manage, and track tasks efficiently. It supports functionalities such as user authentication, task creation, updating, deletion, and category management.

Features
User Authentication: Users can sign in and manage their sessions with JWT.

Task Management: Create, update, delete, and categorize tasks.

CORS Support: The backend is configured to handle cross-origin requests.

Tools/Packages Used
Frontend:

React.js

React Router

Ant Design

React Icons

Axios

JWT Authentication

Backend:

Node.js

Express.js

MongoDB (using MongoDB Atlas)

JWT (JSON Web Tokens)

CORS middleware

dotenv for environment variables

Cookie Parser

Morgan (for HTTP request logging)

Development:

Visual Studio Code

Postman (for testing API)

Project Setup
1. Clone the Repository
To get started with the project, first clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/softvance-task-manager.git
cd softvance-task-manager
2. Install Dependencies
Run the following command to install the necessary dependencies:

bash
Copy
Edit
npm install
3. Environment Variables
Create a .env file in the root directory of your project and add the following environment variables:

bash
Copy
Edit
ACCESS_TOKEN_SECRET=your_jwt_secret
DB_NAME=your_db_name
DB_PASS=your_db_password
PORT=9000
4. Running the Project
Frontend:
For the frontend, navigate to the client directory and run:

bash
Copy
Edit
npm start
Backend:
For the backend, navigate to the server directory and run:

bash
Copy
Edit
npm start
The frontend will be running on http://localhost:5173, and the backend will be on http://localhost:9000.

5. Testing the API
To test the backend API, use tools like Postman to send requests. Below are some API endpoints to get started:

POST /jwt - Generate a JWT token for the user.

POST /tasks - Create a new task.

GET /tasks - Get all tasks.

GET /tasks/:id - Get a specific task by ID.

PUT /tasks/:id - Update a task by ID.

DELETE /tasks/:id - Delete a task by ID.
