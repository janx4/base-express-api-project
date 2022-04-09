require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5678;

// Security configuration
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
        limit: "50mb",
    })
);

// API Routing
app.use("/api", require("./src/routes/router"));
app.use((req, res) => {
    return res.status(404).send();
});

// Errors handler
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send();
});

// You can check the database connection before run the server
app.listen(port, () => {
    console.log(`Backend server is listening on port ${port}`);
    console.log(`http://localhost:${port}`);
});
