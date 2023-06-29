import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

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

const saltRounds = 10;
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

// Admin Registration
app.post("/adminregister", (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error registering new admin");
    }

    const sql = "INSERT INTO admin (username, password) VALUES (?, ?)";
    db.query(sql, [username, hashedPassword], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error registering new admin");
      } else {
        console.log(result);
        res.send("Admin registered successfully");
      }
    });
  });
});

// User Registration
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error registering new user");
    }

    const sql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error registering new user");
      } else {
        console.log(result);
        res.send("User registered successfully");
      }
    });
  });
});
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM user";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const sql = "DELETE FROM user WHERE id = ?";

  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: "User removed successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  });
});

// User Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM user WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error logging in");
    }

    if (results.length > 0) {
      const user = results[0];
      bcrypt.compare(password, user.password, (err, passwordMatch) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Error logging in");
        }

        if (passwordMatch) {
          const token = jwt.sign({ id: user.id }, secretKey);
          return res.json({ token });
        } else {
          return res.status(401).send("Invalid email or password");
        }
      });
    } else {
      return res.status(401).send("Invalid email or password");
    }
  });
});
// Admin Login
app.post("/adminlogin", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM admin WHERE username = ?";
  db.query(sql, [username], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error logging in");
    }

    if (results.length > 0) {
      const admin = results[0];
      bcrypt.compare(password, admin.password, (err, passwordMatch) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Error logging in");
        }

        if (passwordMatch) {
          const token = jwt.sign({ id: admin.id }, secretKey);
          return res.json({ token }); // Send the token as JSON
        } else {
          return res.status(401).send("Invalid username or password");
        }
      });
    } else {
      return res.status(401).send("Invalid username or password");
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
app.delete("/courses/:id", (req, res) => {
  const coursesId = parseInt(req.params.id);
  const sql = "DELETE FROM courses WHERE id = ?";

  db.query(sql, [coursesId], (err, result) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: "User removed successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
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

app.delete("/syllubus/:int", (req, res) => {
  const syllubusint = parseInt(req.params.id);
  const sql = "DELETE FROM syllubus WHERE id = ?";

  db.query(sql, [syllubusint], (err, result) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: "User removed successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  });
});
app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete("/books/:id", (req, res) => {
  const booksId = parseInt(req.params.id);
  const sql = "DELETE FROM books WHERE id = ?";

  db.query(sql, [booksId], (err, result) => {
    if (err) {
      console.error("Error executing the query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: "User removed successfully" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  });
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
