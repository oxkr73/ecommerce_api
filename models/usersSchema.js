const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

mongoose.set("useCreateIndex", true);

const usersSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  surname: { type: String, required: [true, "Surname is required"] },
  email: { type: String, unique: true, required: [true, "Email is required"] },
  password: { type: String, required: true, select: true },
  rol: { type: String, default: "client" },
  signupDate: { type: Date, default: Date.now() }
});

usersSchema.pre("save", function(next) {
  let user = this;

  bcrypt
    .genSalt(10)
    .then(salt => {
      bcrypt.hash(user.password, salt).then(hash => {
        user.password = hash;
        next();
      });
    })
    .catch(err => {
      return next(err);
    });
});

const Users = mongoose.model("user", usersSchema);

module.exports = Users;
