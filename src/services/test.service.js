const TestModel = require("../models/test.model");

exports.findTestData = (id) => {
    // do something with your business logic
    return TestModel.findById(id);
};

exports.getTestData = () => {
    // do something with your business logic
    return TestModel.getAll();
};

exports.addTestData = ({ username, name }) => {
    // do something with your business logic
    return TestModel.add({ username, name });
};

exports.updateTestData = (id, data) => {
    // do something with your business logic
    return TestModel.update(id, data);
};

exports.deleteTestData = (id) => {
    // do something with your business logic
    return TestModel.delete(id);
};
