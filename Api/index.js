var express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const cardscheama = require("./data");
var app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kimmi:ADtHBLsfSW50rBEp@cluster0.6jljezv.mongodb.net/filesharing?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

// const savaData = await AdminModel.create(data)

// res.status(201).send({ status: false, message: savaData });
app.use(cors());
app.post("/product", async function (req, res) {
  console.log(req.body);
  const productdata = new cardscheama(req.body);

  await productdata.save();
  res.send(productdata);
});

app.get("/productget", async function (req, res) {
  try {
    const data = await cardscheama.find();

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
});

app.listen(8080, function () {
  console.log("CORS-enabled web server listening on port 80");
});
