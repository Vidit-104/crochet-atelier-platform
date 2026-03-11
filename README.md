# Crochet Atelier Platform 🧶

A full-stack web platform for showcasing and managing handmade crochet products.
The project provides a modern product listing UI with a backend API that serves product data and images.

## ✨ Overview

Crochet Atelier Platform is designed to help small handmade craft businesses present their products online.
It features a responsive frontend, a RESTful backend API, and a simple product data model that can be extended for e-commerce features such as orders, carts, and authentication.

This project demonstrates a **modern full-stack architecture using React and Spring Boot.**

---

## 🧱 Architecture

Browser (React UI)
↓
REST API (Spring Boot)
↓
Database (H2 / JPA)
↓
Image Storage (static image server)

---

## ⚙️ Tech Stack

### Frontend

* React (Vite)
* TailwindCSS
* JavaScript (JSX)
* Fetch API

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate ORM
* Embedded Tomcat

### Database

* H2 (in-memory database for development)

### Tools

* Git & GitHub
* Postman (API testing)

---

## 📦 Features

* Responsive product listing interface
* REST API for retrieving products
* Image serving from backend
* Modular React components
* Clean layered backend architecture
* Easy extension for e-commerce features

---

## 📁 Project Structure

```
crochet-atelier-platform
│
├── backend
│   ├── controller
│   ├── entity
│   ├── service
│   ├── repository
│   └── config
│
├── frontend
│   ├── src
│   │   ├── components
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## 🚀 Running the Project Locally

### 1. Start the Backend

Navigate to the backend folder:

```
cd backend
```

Run the Spring Boot application:

```
mvn spring-boot:run
```

The backend will start on:

```
http://localhost:8080
```

Example API endpoint:

```
http://localhost:8080/products
```

---

### 2. Start the Frontend

Navigate to the frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

The frontend will start on:

```
http://localhost:5173
```

---

## 🧪 Example API Response

```
[
  {
    "id": 1,
    "name": "Crochet Rose",
    "description": "Handmade crochet rose perfect for gifts",
    "price": 350,
    "imageUrl": "rose.jpg",
    "category": "Accessories",
    "customizable": true
  }
]
```

---

## 🔮 Future Improvements

* Product category filtering
* Admin dashboard for adding products
* Image upload support
* Shopping cart system
* Order management
* Authentication
* MySQL or PostgreSQL database
* Cloud deployment

---

## 📚 Learning Goals

This project was built to practice:

* Building REST APIs with Spring Boot
* Using JPA and ORM concepts
* Creating reusable React components
* Connecting frontend and backend systems
* Designing full-stack web applications

---

## 📄 License

This project is for educational and demonstration purposes.

---

## 👤 Author

Vidit Goel
B.Tech Data Science Student
Interested in software engineering, AI systems, and building useful digital tools.
