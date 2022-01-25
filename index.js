require("dotenv").config();
const app = require("express")();
app.listen(process.env.PORT, () => {
  console.log(`Server Up`);
});
app.get("/", (req, res) => {
  res.send("Ecommerce Site");
});
