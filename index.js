const express = require('express');
const users = require("./MOCK_DATA.json");

const app=express();

const PORT = 8000;

app.get("/", (req, res) => {
    res.send('Welcome to the Users API! Access /users to see the user data.');
});

app.get("/users", (req, res)=>{
    return res.json(users);
});

app.listen(PORT, ()=> console.log(`Server started at PORT: http://localhost:${PORT}`));