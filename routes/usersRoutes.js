const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/auth");
const usersControllers = require("../controllers/usersController");

routes.get("/users/:email", auth, usersControllers.getUser);
routes.post("/users/signup", usersControllers.signUp);
routes.post("/users/signin", usersControllers.signIn);

module.exports = routes;
