const express = require("express");
const individualInformationMap = require("./payment/model/IndividualInfomation");
const workingRecordMap = require("./payment/model/WorkingRecord");
const CreateMonthlyPayment = require("./payment/service/monthlyPayment");
const app = express();
const port = 6969;

app.get("/", (req, res) => {
  res.json({ name: "TopToppy" });
});

app.listen(port, () => {
  console.log(`Start app listening at http://localhost:${port}`);
  console.log(`Start app listening at http://localhost:${port}`);
  console.log(`Start app listening at http://localhost:${port}`);
});

app.get("/individual-informations/:email", (req, res) => {
  let email = req.params.email;
  let individualInfomation = individualInformationMap.get(email);

  res.json(individualInfomation);
})

app.get("/working-record/:email", (req, res) => {
  let email = req.params.email;
  let workingRecord = workingRecordMap.get(email);
  res.json(workingRecord);
});

app.get("/monthly-payment/:email", (req, res) => {
  let email = req.params.email;
  let response = CreateMonthlyPayment(email);
  res.json(response);
});
