const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`server connect on ${PORT}`);
});
