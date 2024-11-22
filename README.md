# School Management API

This project is a Node.js-based API for managing school data using MySQL. It supports adding new schools and listing them based on proximity to the user's location.

## Technologies
- Node.js
- Express.js
- MySQL
- Railway (for hosting)
- Postman (for testing)

## API Endpoints
## Add School
- **URL:** `https://school-management-production-fbd9.up.railway.app/api/addSchool`
- **Method:** POST
- **Payload:**
  ```json
  {
    "name": "ABC School",
    "address": "123 School Street, City",
    "latitude": 40.712776,
    "longitude": -74.005974
  }

## List Schools
- **URL:** `https://school-management-production-fbd9.up.railway.app/api/listSchools?latitude=40&longitude=-74.006`
- **Method:** GET
- **Parameters:**
latitude (User's latitude)
longitude (User's longitude)

## Postman Collection
Access the Postman collection via link- 
https://www.postman.com/nadeem9748/school-management/collection/y2kvo4y/rest-api-basics-crud-test-variable?action=share&creator=32314448.

## Setup Instructions
**Clone the repository:**
```json
git clone https://github.com/your-username/school-management-api.git
cd school-management-api
```
**Install dependencies:**
```json
npm install
```
**Configure environment variables in a .env file:**
```json
MYSQLHOST=
MYSQLUSER=
MYSQLPASSWORD=
MYSQLDATABASE=
PORT=3002
```


