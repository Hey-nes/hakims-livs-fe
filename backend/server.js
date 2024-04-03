const { mongoose, connectToDatabase } = require("./src/config/database");
const app = require("./app");

connectToDatabase();

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("Freaky codes")
module.exports = mongoose;
