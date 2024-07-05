const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://rishabhraj2203:AJNUQc8W1vaiv7ya@mastercluster11.pzelqzt.mongodb.net/todos")

const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
})

const Todos = mongoose.model('Todos', todosSchema)
const Users = mongoose.model('Users', UserSchema)

module.exports = { Todos, Users }