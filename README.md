# 🎬 Movie Mate

**Movie Mate** is a responsive movie ticket booking web application.  
It allows users to browse movies, sign up, log in, manage their profiles, add tickets to the cart, and export movie data in multiple formats.  

---
<p align="center">
  <img src="screenshots/logo.png" alt="Movie Mate Logo" width="1000"/>
</p>
---

## 🧱 Tech Stack  

![HTML](https://img.shields.io/badge/HTML-HTML-orange?style=for-the-badge&logo=html5&logoColor=orange)  
![CSS](https://img.shields.io/badge/CSS-CSS-blue?style=for-the-badge&logo=css3&logoColor=blue)  
![JavaScript](https://img.shields.io/badge/JavaScript-JS-yellow?style=for-the-badge&logo=javascript&logoColor=yellow)  
![SQL](https://img.shields.io/badge/SQL-Database-blueviolet?style=for-the-badge&logo=database&logoColor=white)  
![MySQL](https://img.shields.io/badge/MySQL-Database-lightblue?style=for-the-badge&logo=mysql&logoColor=blue)  
![XAMPP](https://img.shields.io/badge/XAMPP-Server-orange?style=for-the-badge&logo=xampp&logoColor=orange)  
![phpMyAdmin](https://img.shields.io/badge/phpMyAdmin-DB_Manager-red?style=for-the-badge&logo=phpmyadmin&logoColor=blue)  

## ✨ Features

- 🔐 **User Authentication** (Sign Up / Sign In)  
- 🎥 **Movie Showcase** (Now Showing & Coming Soon)  
- 🛒 **Cart Functionality** with total price calculation  
- 👤 **User Profile & Membership Info**  
- 📊 **Exportable Movie Table** (PDF, CSV, Excel)  
- 📱 **Responsive Design** with SwiperJS & Boxicons  

---

## 📸 Screenshots  

| ![Landing Page](screenshots/mm_landing.png) | ![Sign Up Page](screenshots/mm_signup.png) | ![Movies Page](screenshots/mm_movies.png) |
|------------------------------------------|--------------------------------------------|-------------------------------------------|
| ![Cart Page](screenshots/mm_cart.png)    | ![General Screenshot](screenshots/Screenshot%202025-08-30%20173144.png) | ![Profile Page](screenshots/mm_profile.png) |

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/moviemate.git
cd moviemate
```

### 2️⃣ Setup MySQL Database

1. Start XAMPP (Apache & MySQL).
2. Open phpMyAdmin.
3. Create a database named `moviemate`.

Inside `moviemate`, create a table `signup` with the following SQL command:

```sql
CREATE TABLE signup (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(15) NOT NULL,
  password VARCHAR(255) NOT NULL,
  confirm_password VARCHAR(255) NOT NULL
);
```

### 3️⃣ Run the Server

1. Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
2. Navigate to your project directory if you haven't already:

   ```bash
   cd moviemate
   ```

3. Install the necessary dependencies (if you have a `package.json` file):

   ```bash
   npm install
   ```

4. Run the server with the following command:

   ```bash
   node server.js
   ```

👉 Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it with attribution.

## 👨‍💻 Author

**Dhanush Kumar M**  
