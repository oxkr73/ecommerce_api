const express = require("express");
const routes = express.Router();
const usersControllers = require("../controllers/usersController");

routes.get("/users/:email", usersControllers.getUser);
routes.post("/users/new_user", usersControllers.createUser);

module.exports = routes;
