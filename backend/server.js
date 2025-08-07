const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Avinash@2003',
  database: 'shopping_portal',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Error:", err.message);
    process.exit(1);
  }
  console.log("✅ MySQL Connected!");
});

// Signup Route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) {
      console.error("❌ Signup Query Error:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (result.length > 0) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err) => {
          if (err) {
            console.error("❌ Insert Error:", err);
            return res.status(500).json({ success: false, message: "Signup failed" });
          }
          return res.status(201).json({ success: true, message: "✅ User created successfully" });
        }
      );
    } catch (err) {
      console.error("❌ Hash Error:", err);
      return res.status(500).json({ success: false, message: "Password encryption failed" });
    }
  });
});

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) {
      console.error("❌ Login Query Error:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    try {
      const isMatch = await bcrypt.compare(password, result[0].password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: "Incorrect password" });
      }

      return res.status(200).json({ success: true, message: "✅ Login successful" });
    } catch (err) {
      console.error("❌ Compare Error:", err);
      return res.status(500).json({ success: false, message: "Login failed" });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
