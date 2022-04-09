const router = require("express").Router();
const testController = require("../controllers/test.controller");

// CRUD examples

router.get("/", testController.getDataHandler);

router.post("/", testController.addDataHandler);

router.patch("/:testId", testController.updateDataHandler);

router.delete("/:testId", testController.deleteDataHandler);

module.exports = router;
