# Internship-form-task-backend
This repository contains the files required to run a local server that provides an api with different endpoints and this can be integrated with the applications.

# Slidely Ai Task Backend Server

This is the backend server for the Slidely task. It is built using Express and TypeScript.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
   Express - using npm install express
   Make sure Typescript is installed

### Instructions
1. When running first time open the folder in command prompt and run the command: npm install express
to install the express in the project.
2. Then run the command npm run start
   to run the server in the local machine at port 3000.


The api provides several endpoints:-
1. /ping - returns true on success
2. /submit - it posts the data on the db file of the server
3. /read - it fetches data at a specified index (http://localhost:3000/read?index={Index})
4. /delete - it deletes data at a specified index (http://localhost:3000/delete?index={Index})
5. /edit - it updates the data at a specified index (http://localhost:3000/edit?index={Index})
6. /search - it searches the database for a specific email address and returns the resulting entry (http://localhost:3000/search?email={Email})
