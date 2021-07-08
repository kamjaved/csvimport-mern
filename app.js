var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors')
// express-fileupload
const fileUpload = require("express-fileupload");

var mongoose = require("mongoose");

var usersRouter = require("./routes/user");
var uploadRouter = require("./routes/upload");

var app = express();

const DB = "mongodb+srv://kamran:1234@cluster0.fvxek.mongodb.net/csv-import?retryWrites=true&w=majority"

// default options
app.use(fileUpload());


mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use("/upload", cors(), uploadRouter);
app.use("/users", usersRouter);


app.listen(5000, () => {
    console.log("Server is Runnig in port 5000");
})

module.exports = app;
