const Test = () => {
    let users = [
        {
            id: 1,
            username: "test",
            name: "Test user",
        },
    ];

    return {
        findById(id) {
            const user = users.find((user) => user.id === id);

            return user;
        },
        getAll() {
            return users;
        },
        add({ username, name }) {
            // Find the current id of data
            const maxId = users.reduce(
                (max, user) => (user.id > max ? user.id : max),
                users[0].id || 0
            );
            users.push({ id: maxId + 1, username, name });
        },
        update(user, { username, name }) {
            username && (user.username = username);
            name && (user.name = name);

            return user;
        },
        delete(id) {
            users = users.filter((user) => user.id !== id);
            return id;
        },
    };
};

const TestModel = Test();

module.exports = TestModel;
