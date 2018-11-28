const connectionDB = require("../config/connection");
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
  createUser: (req, res) => {
    const user = new Users(req.body);
    Users.create(user)
      .then(user => {
        console.log(user);
        res.send(user);
      })
      .catch(err => {
        res.send(err.message);
      });
  }
};

module.exports = usersController;
