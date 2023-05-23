const PORT = 3000;

const express = require("express");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

const flights = [
  { to: "Turkey", from: "Netherlands", km: "1310" },
  { to: "Jordan", from: "Norway", km: "1494913" },
];

app.get("/flights", (req, res, next) => {
  res.send(flights);
});

app.post("/flights", (req, res) => {
  const flightData = req.body;
  flights.push(flightData);
  res.send(201);
});

app.listen(PORT, () => {
  console.log(`App is listening the ${PORT}`);
});
