module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || "mongodb://localhost:/e-commerce",
  SECRET_TOKEN: "miclavedetokens"
};
