## Project Setup Requirements

Before running this project, ensure the following versions are installed on your system:

* **Python:** 3.13.3
* **Django:** 5.2
* **Django REST Framework:** 3.15.2
* **Node.js:** 22.22.0
* **npm:** 10.9

---

## Backend Overview

The backend is built using **Django** and **Django REST Framework**, providing a minimal REST API for managing school records.

### Data Model

The primary entity is `School`, which contains:

* **name** – Name of the school
* **city** – Location of the school

### Serialization

A `ModelSerializer` exposes all model fields through the API, enabling seamless data exchange between backend and frontend.

### Configuration

The backend includes:

* **Django REST Framework** for API development
* **CORS support** to allow communication with the frontend application

### Database Migration

After defining models, database schema changes must be applied using Django migrations before running the server.

This backend serves as a lightweight RESTful service designed to integrate with a React frontend for full CRUD operations.

---

## Frontend Overview

The frontend is developed using **React** and communicates with the Django REST API to perform full CRUD operations on school data.

### Development Environment

The React application runs locally using the Node.js development server and connects to the backend via HTTP requests.

### Key Implementation Notes

* All API interaction logic is implemented inside **`App.js`**.
* **Axios** is used for HTTP communication with the Django backend, including:

  * Fetching school records
  * Adding new schools
  * Editing existing entries
  * Deleting records

Only `App.js` and Axios configuration were modified to enable full CRUD communication with the backend API.

### Running the Frontend

Start the React development server from the command line:

```bash
cd frontend/school
npm install
npm start
```

The application will be available at:

```
http://localhost:3000
```

The frontend is configured to interact with the locally running Django backend.

---

Together, the Django backend and React frontend form a minimal full-stack CRUD application suitable for learning, extension, and deployment.
