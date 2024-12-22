
This project is a web application for managing a trolleybus network. It consists of a backend server and a frontend client.

<b>Frontend</b><br>

The frontend is built with React and Vite. It uses Tailwind CSS for styling.<br>


<b>Environment Variables</b><br>

The frontend uses an environment variable for the backend base URL. Create a .env file in the frontend directory with the following content:
VITE_BASE_URL=http://localhost:8000

<b>Backend</b><br>

The backend is built with Node.js and Express. It uses SQLite as the database.

The server will run on http://localhost:8000.
API Endpoints
  - GET / - Returns the database name.
  - GET /megallok - Returns all stops.
  - GET /jaratok - Returns all routes.
  - GET /jarat/:jarat/irany/:irany - Returns route details for a specific route and direction.
  - GET /megallo/:megalloid - Returns stop details for a specific stop.

