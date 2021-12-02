// From Daniel -> You should not put you MongoDB credentials here. YOu should make a .env file that you keep yourself that won't get passed to github.

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://gyouza:Jiaozi123@cluster0.ark8o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = uri;
