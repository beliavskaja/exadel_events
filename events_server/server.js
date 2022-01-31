const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/user.routes");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_KEY}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});