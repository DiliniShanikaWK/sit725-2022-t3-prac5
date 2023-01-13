//mongodb connection
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://dilini:123@cluster0.unuv0e9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err, db) => {
  if (!err) {
    console.log("MongoDb Connected Successfully");
  } else {
    console.log("DB Error : ", err);
    process.exit(1);
  }
});
module.exports = client;
