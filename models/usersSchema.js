const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set("useCreateIndex", true);

const usersSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  surname: { type: String, required: [true, "Surname is required"] },
  email: { type: String, unique: true, required: [true, "Email is required"] },
  rol: { type: String, default: "client" }
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
