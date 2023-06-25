import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root123",
  database: "trial",
});

const secretKey = "mySecretKey";

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("No token provided");
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Failed to authenticate token");
    }

    // Check if the decoded token corresponds to an admin
    const adminId = decoded.id;
    const sql = "SELECT * FROM admin WHERE id = ?";
    db.query(sql, [adminId], (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error verifying admin");
      }

      if (results.length === 0) {
        return res.status(401).send("Unauthorized");
      }

      req.adminId = adminId;
      next();
    });
  });
};

// User Registration
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user");
    } else {
      console.log(result);
      res.send("User registered successfully");
    }
  });
});

// User Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error logging in");
    }

    if (results.length > 0) {
      const user = results[0];
      const token = jwt.sign({ id: user.id }, secretKey);
      return res.json({ token });
    }

    return res.status(401).send("Invalid email or password");
  });
});

// Admin Login
app.post("/adminlogin", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error logging in");
    }

    if (results.length > 0) {
      const admin = results[0];
      const token = jwt.sign({ id: admin.id }, secretKey);
      return res.json({ token });
    }

    return res.status(401).send("Invalid username or password");
  });
});
app.get("/users", (req, res) => {
  // Retrieve users from the database
  const sql = "SELECT * FROM user";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "An error occurred while fetching users" });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/courses", (req, res) => {
  const sql = "SELECT * FROM courses";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/syllabus", (req, res) => {
  const sql = "SELECT * FROM syllabus";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
