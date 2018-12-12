//const connectionDB = require("../config/connection");
const service = require("../services/index");
const bcrypt = require("bcrypt");
const Users = require("../models/usersSchema");

let usersController = {
  getUser: (req, res) => {
    Users.find({ email: req.params.email })
      .then(user => {
        if (user.length > 0) {
          res.json(user);
        } else {
          res.send("Usuario desconocido o erroneo");
        }
      })
      .catch(err => {
        res.send(err.message);
      });
  },
  signUp: (req, res) => {
    const user = new Users(req.body);
    Users.create(user)
      .then(user => {
        console.log(user);
        res.send({ token: service.createToken(user) });
      })
      .catch(err => {
        res.send(err.message);
      });
  },
  signIn: (req, res, next) => {
    const password = req.body.password;
    Users.findOne({ email: req.body.email })
      .then(function(user) {
        //console.log(password, user.password);
        return {
          bcrypt: bcrypt.compareSync(password, user.password),
          user: user
        };
      })
      .then(function(response) {
        if (!response.bcrypt) {
          res.status(403).send("Wrong Password");
          return;
        }
        res.status(200).send(service.createToken(response.user));
      })
      .catch(function(error) {
        console.log("Error authenticating user: ", error.message);
        next();
      });
  }
};

module.exports = usersController;
