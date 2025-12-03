🌍 Tourist-Stay-Hub
- Tourist Stay Hub is a full-stack homestay management platform built using Spring Boot microservices and ReactJS, designed to streamline property listings, bookings, and host–guest interactions.  
- It features 8+ optimized APIs within a scalable microservice architecture, enabling faster response times, smooth data handling, and admin-controlled property approval workflows.  
- The system enhances real-time engagement between hosts and guests while delivering improved performance, higher reliability, and an overall seamless user experience across the platform.

🚀 Features

🔐 Authentication Service (Auth-Service)
- JWT-based authentication  
- Role-based access: USER / ADMIN
- Login & Registration APIs  
- Secure access to downstream microservices  
🏨 Hotel Service (Hotel-Service)
- Add and manage hotel listings  
- Search by location, price, and ratings  
- Hotel availability response APIs  

📅 Booking Service (Booking-Service)
- Create hotel bookings  
- Async confirmation workflow  
- Inter-service communication (auth + hotel)  

🔗 API Gateway
- Centralized routing layer  
- Gateway-level filtering  
- Path-based service mapping  

💻 Frontend (React Client)
- Modern responsive UI  
- API Integration with backend  
- Optimized rendering & caching  
- Secure routes using JWT



🧱 Tech Stack

-> Backend
- Java 17  
- Spring Boot 3  
- Spring Security  
- Spring Cloud Gateway  
- Spring Data JPA  
- MySQL  
- Maven  

-> Frontend
- React.js  
- Axios  
- React Router DOM  

-> Development & Tools
- Thunder Client 
- Git & GitHub  
- Node.js & npm  



## 📁 Project Structure

