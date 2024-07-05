const express = require("express");
const router = express.Router();
const { Users } = require('../db')
const { JWT_SECRET } = require('../config')
const jwt =  require('jsonwebtoken')

router.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.create({
        email, password
    })
    res.status(200).json({
        user,
        msg: "User Registerd"
    })
});


router.get('/signin', async (req, res) => {
    const { email, password } = req.body;
    const isUser = Users.findOne({
        email, password
    })
    if(!isUser){
        return res.status(400).json({
            msg: "User not found"
        })
    }
    const token = jwt.sign({
        email, password 
    }, JWT_SECRET)
    res.status(200).json({
        token,
    })
})