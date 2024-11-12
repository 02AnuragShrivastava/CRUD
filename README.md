A full-stack application for user registration with features like viewing, adding, updating, and deleting users. The backend is built using Node.js, Express, and MongoDB, while the frontend is built with React.

Backend



Clone the repository.
Install dependencies
MongoDB: Ensure that MongoDB is running locally or use a cloud instance like MongoDB Atlas.

Update the connection string in server.js to match your MongoDB setup.
The backend will run on http://localhost:5000.
API Endpoints
GET /users: Get all registered users.
POST /users: Add a new user (requires name, email, dateOfBirth).
PUT /users/:id: Update an existing user's information.
DELETE /users/:id: Delete a user.



Frontend (React)

Functionality
View Users: Displays a list of all registered users.
Add User: Allows adding a new user by filling out a form (name, email, date of birth).
Update User: Allows updating the details of an existing user.
Delete User: Deletes a user from the list.
Key Components
UserList.jsx: Displays the list of users.
UserForm.jsx: Form for adding and updating user details.
App.jsx: Main component that handles routing and user actions.
API Integration with Axios
Axios is used to communicate with the backend API to fetch, add, update, and delete users.

Dependencies
Backend
express: Web framework for Node.js.
mongoose: MongoDB ODM to interact with MongoDB.
cors: Middleware for handling CORS.
dotenv: To manage environment variables.
nodemon: For automatic server restarts during development.
Frontend
react: Frontend framework.
axios: For making HTTP requests to the backend API.
react-router-dom: For routing within the app.
Troubleshooting
Backend Errors
MongoDB connection issue: Ensure MongoDB is running locally or use a cloud instance like MongoDB Atlas.
Duplicate Email Error: If you get an error about a duplicate email, ensure the email is unique, or handle the error gracefully in your backend
