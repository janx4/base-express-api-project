const express = require("express");
const testRouter = require("./test.route");

const apiRoute = express();

// Inludes all router right here!
apiRoute.use("/test", testRouter);

module.exports = apiRoute;
