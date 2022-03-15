const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./routes/user.routes");
const EventRouter = require("./routes/events.routes");
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

app.use(UserRouter);
app.use(EventRouter);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.listen(port, () => {
  console.log("Server is running at port 3000");
});

