const express = require("express");
const app = express();

var TodoRoute = require('./routes/todos')
var UserRoute = require('./routes/user')

app.use(express.json());

app.use("/", TodoRoute);
app.use("/user", UserRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/rishabh7007/backend-todo.git
// git push -u origin main