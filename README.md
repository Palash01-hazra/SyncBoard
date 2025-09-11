SyncBoard: Real-Time Collaborative Whiteboard
SyncBoard is a feature-rich, real-time collaborative whiteboard application built with the MERN stack and Socket.IO. It provides a seamless and interactive platform for users to brainstorm, sketch ideas, and collaborate visually in real-time. This project emphasizes low-latency data synchronization and a scalable backend architecture to support multiple concurrent users on a shared canvas.

Live Demo: [Link to your deployed website]

🎥 Demo
[Insert a GIF of your application in action here. This is highly recommended! You can use a tool like Giphy Capture or ScreenToGif to record your screen.]

✨ Features
Real-Time Collaboration: Changes made by one user are instantly visible to all other users on the same board, thanks to a WebSocket-based architecture using Socket.IO.

Comprehensive Drawing Tools: Includes a variety of tools for a rich creative experience:

Brush Tool for freehand drawing.

Line, Rectangle, and Circle shape tools.

Eraser Tool.

Undo/Redo Functionality: Users can easily undo their last action or redo it.

Secure User Authentication: Implemented JWT (JSON Web Tokens) for secure user registration and login, ensuring that only authorized users can access and edit boards.

Persistent Canvases: All drawings are automatically saved to a MongoDB database, allowing users to return to their work later.

Download Board: Users can download the current state of the whiteboard as a PNG image.

🛠️ Tech Stack & Architecture
This project is a full-stack application with a clear separation between the client and server.

Frontend:

React.js: For building a fast and interactive user interface.

Socket.IO Client: To manage the real-time WebSocket connection with the server.

HTML5 Canvas: For all drawing and rendering operations.

Tailwind CSS: For modern and responsive styling.

Backend:

Node.js & Express.js: To build a robust and scalable RESTful API and WebSocket server.

Socket.IO Server: To handle real-time event emissions and broadcasting.

MongoDB: A NoSQL database used to store user data and canvas drawings.

Mongoose: As an ODM (Object Data Modeling) library to interact with MongoDB in a structured way.

JWT (JSON Web Tokens): For implementing secure, stateless user authentication.

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v18 or later)

npm

MongoDB Atlas account (or a local MongoDB instance)

Installation & Setup
Clone the repository

git clone [https://github.com/](https://github.com/)[Your-GitHub-Username]/[Your-Repo-Name].git

Setup the Backend

cd backend
npm install

Create a .env file in the backend directory and add the following variables:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key

Start the backend server:

npm start

Setup the Frontend

cd ../frontend
npm install

Create a .env file in the frontend directory and add the backend API URL:

REACT_APP_API_URL=http://localhost:5000 

Start the frontend React app:


npm start

Your application should now be running, with the frontend on http://localhost:3000 and the backend on http://localhost:5000.

👤 Contact
Palash Hazra

LinkedIn: [Your LinkedIn Profile URL]

GitHub: [Your GitHub Profile URL]
