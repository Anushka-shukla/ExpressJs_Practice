// import mongoose module
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/myDb", {

    useNewUrlParser: true,
    useUnifiedTopology: true

 })
 .then(() => console.log("Db connected successfully!")).catch(() =>
    (console.log("Error connecting Db!")))