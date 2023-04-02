require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const server = require("http").Server(app);
const productRoutes = require("./routes/products");

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to Database");
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
  });
