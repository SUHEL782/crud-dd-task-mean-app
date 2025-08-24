const express = require("express");
const cors = require("cors");

const app = express();

// enable CORS
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Database
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to the database!");
  })
  .catch((err) => {
    console.error("❌ Cannot connect to the database!", err);
    process.exit();
  });

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Test application." });
});

// Correct tutorial routes (fixed typo)
require("./app/routes/tutorial.routes")(app);

// Set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}.`);
});

