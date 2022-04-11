require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const chalk = require("chalk");
const path = require("path");

const app = express();
const port = process.env.PORT || 5678;
const corsOptions = {
    origin: "*",
};

// Security configuration
app.disable('x-powered-by');
app.use(cors(corsOptions));
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

// Default response -> HTTP_NOT_FOUND 404 & render 404.html page
app.use((req, res) => {
    return res
        .status(404)
        .sendFile(path.join(__dirname, "/src/views/errors/404.html"));
});

// Errors handler
app.use((err, req, res, next) => {
    console.log(chalk.bgRed(err));

    // Default error handler
    return res.status(500).send({
        error: "An error has occurred. Please try again later.",
    });
});

/**
 * You can check the database connection before run the server
 * Using CHALK to display the error message, easy to read and debug.
 */
app.listen(port, () => {
    console.log(
        chalk.bgYellow.black.bold(`Backend server is listening on port ${port}...`)
    );
    console.log(chalk.bold.blue(`http://localhost:${port}`));
});
