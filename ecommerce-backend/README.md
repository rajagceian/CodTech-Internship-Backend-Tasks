# 🛒 E-Commerce Backend API

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: RAJA KUMAR

*INTERN ID*: CT04DF1126

*DOMAIN*:BACKEND WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSH KUMAR

------------------------------------------------------------------------------------------
# 🛒 E-Commerce Backend API

A fully functional RESTful backend system for an e-commerce platform. Built with **Node.js**, **Express.js**, **MySQL**, and **Sequelize**, this backend handles:

- ✅ User authentication
- ✅ Product management
- ✅ Order processing

---

## 🚀 Features

- 🔐 User Registration & Login (JWT Authentication)
- 📦 CRUD Product Management
- 🧾 Place & View Orders
- 🔗 Secure API Endpoints with Middleware
- 💾 Connected to MySQL Database

---

## 🛠 Tech Stack

| Layer       | Technology         |
|-------------|--------------------|
| Backend     | Node.js, Express.js|
| Database    | MySQL              |
| ORM         | Sequelize          |
| Auth        | JWT, Bcrypt.js     |
| Config      | dotenv             |

---

## 📁 Project Structure
ecommerce-backend/ </br>
├── config/ </br>
│   └── db.js </br>
├── controllers/ </br>
│   ├── authController.js </br>
│   ├── productController.js </br>
│   └── orderController.js </br>
├── middleware/ </br>
│   └── authMiddleware.js </br>
├── models/ </br>
│   ├── user.js </br>
│   ├── product.js </br>
│   ├── order.js </br>
│   └── index.js </br>
├── routes/ </br>
│   ├── authRoutes.js </br>
│   ├── productRoutes.js </br>
│   └── orderRoutes.js </br>
├── app.js </br>
└── .env </br>

# 2️⃣ Install Dependencies
  npm install

# 3️⃣ Configure Environment
  Create a .env file: </br>
  DB_NAME=ecommerce_db  </br>
  DB_USER=root </br>
  DB_PASS=your_mysql_password </br>
  DB_HOST=localhost </br>
  JWT_SECRET=your_jwt_secret </br>
  PORT=3002 </br>

# 4️⃣ Create MySQL Database
  CREATE DATABASE ecommerce_db;

# 5️⃣ Run the Server
  node app.js
