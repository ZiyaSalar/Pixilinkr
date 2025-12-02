# URL Shortener – Full Stack Web Application

A full-stack URL shortening platform built using **Java, Spring Boot, Spring Security (JWT), Spring MVC, MySQL**, and **ReactJS**. The application converts long URLs into compact, shareable short links with secure user authentication and fast redirection.

## Features

### Authentication & Security

* Secure login and signup using Spring Security + JWT.
* Token-based authentication for protected API access.
* Stateless authorization for improved performance.

### URL Shortening

* Generates unique, compact short URLs.
* Fast redirection with optimized lookup queries.
* Stores mappings of original and shortened URLs in MySQL.

### Backend (Spring Boot)

* REST APIs built with Spring Boot and Spring MVC.
* Modular, scalable architecture with proper validations.
* Exception handling and DTO-layer support.

### Database (MySQL)

* Persistent and reliable URL + user data storage.
* Indexed columns for fast lookup.
* Optimized read/write operations.

### Frontend (ReactJS)

* Clean and user-friendly UI.
* Input field for long URL submission.
* Displays generated short URL.
* Handles authentication using JWT.

## Tech Stack

### Backend

* Java
* Spring Boot
* Spring MVC
* Spring Security
* JWT Authentication
* MySQL
* REST APIs

### Frontend

* ReactJS

## Project Structure

```
/backend
  src/main/java/com/urlshortener
    controller/
    service/
    repository/
    security/
    model/
    UrlShortenerApplication.java
  src/main/resources/
    application.properties

/frontend
  src/
    components/
    pages/
    api/
  package.json
```

## Setup Instructions

### 1. Backend Setup (Spring Boot)

```
cd backend
mvn clean install
mvn spring-boot:run
```

Configure MySQL in `application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/urlshortener
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

### 2. Frontend Setup (ReactJS)

```
cd frontend
npm install
npm start
```

## License

Licensed under the MIT License.
