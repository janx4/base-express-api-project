const {
    findTestData,
    getTestData,
    addTestData,
    updateTestData,
    deleteTestData,
} = require("../services/test.service");

exports.getDataHandler = (req, res, next) => {
    try {
        const data = getTestData();

        res.json(data);
    } catch (error) {
        next(error);
    }
};

exports.addDataHandler = (req, res, next) => {
    try {
        const username = req.body.username;
        const name = req.body.name;

        if (!username || !name) {
            return res.status(400).json("Please provide a valid input data!");
        }

        addTestData({ username, name });

        res.status(201).json({ username, name });
    } catch (error) {
        next(error);
    }
};

exports.updateDataHandler = (req, res, next) => {
    try {
        const testId = +req.params.testId;
        const newData = req.body;

        const testData = findTestData(testId);

        if (!testData) {
            return res.status(404).json("Not found! Cannot update!");
        }

        const result = updateTestData(testData, newData);

        res.json(result);
    } catch (error) {
        next(error);
    }
};

exports.deleteDataHandler = (req, res, next) => {
    try {
        const testId = +req.params.testId;

        const testData = findTestData(testId);
        if (!testData) {
            return res.status(404).json("Not found!");
        }

        const deletedId = deleteTestData(testId);
        res.json(`Deleted test id: ${deletedId}`);
    } catch (error) {
        next(error);
    }
};
