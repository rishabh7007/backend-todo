const express = require("express");
const router =  express.Router();
const { Todos } = require("../db");


router.post("/todos", function (req, res, next) {
  const title = req.body.title;
  const description = req.body.description;
  const todo = { title, description };
  if (!todo) {
    res.status(411).json({ msg: "Invalid input" });
  }
  
  Todos.create({
    title: title,
    description: description,
  });
  res.status(200).json({
    msg: "User created successfully",
  });
});

router.get("/todos", userMiddleware, function (req, res, next) {
  res.json({ title: "Express" });
});

module.exports = router
