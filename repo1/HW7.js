const arr = [
    { userName: "Test", lastName: "Test", email: "test.test@gmail.com" },
    { userName: "Dmitro", lastName: "Porohov", email: "dmitro.porohov@yahoo.com" },
    { userName: "Andrii", lastName: "", email: "andrii@mail.ru" },
    { userName: "Fake", lastName: "Person", email: "bad+name@yahoo.com" },
    { userName: "Good", lastName: "User", email: "john123@yahoo.com" },
    { userName: "Also", lastName: "Good", email: "jane.doe456@gmail.com" },
];

const trustedEmails = arr
    .map(user => user.email)
    .filter(email => /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/.test(email));

console.log(trustedEmails);

