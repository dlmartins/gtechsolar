const app = require("express")();
const consign = require("consign");
const db = require("./config/db");

app.db = db;

consign()
  .then("./config/middlewares.js")
  .then("./api/validation.js")
  .then("./api")
  //.then("./api/calcConsumoTotal.js")
  .then("./config/routes.js")
  .into(app);

// calculate total consumption for user with id 1
async function main() {
  // const calculateTotalConsumption = app.api.calcConsumoTotal.calculateTotalConsumption;
  // const totalConsumption = await calculateTotalConsumption(1238);
  // console.log(totalConsumption.toLocaleString('en-US', {maximumFractionDigits: 2}).replace(/,/g, ''));
}

main().catch((err) => {
  console.error(err);
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT}`);
});