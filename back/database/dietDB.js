const myDB = require("./myDB");

function dietDBBuilder() {
  const dietDB = {};
  const COLLECTION_NAME = "diet_plan";

  dietDB.create = (user, foodName, calorieOunce) => {
    const DOCUMENT = {
      user: user,
      foodName: foodName,
      calorieOunce: calorieOunce,
    };
    myDB.create(COLLECTION_NAME, DOCUMENT);
    console.log("Created successfully!");
  };

  dietDB.delete = (user, foodName) => {
    const FILTER = { user: user, foodName: foodName };
    myDB.isExisting(COLLECTION_NAME, FILTER).then((flag) => {
      if (flag) {
        myDB.delete(COLLECTION_NAME, FILTER);
      } else {
        console.log("Delete failed. The food is not existing!");
      }
    });
  };

  dietDB.retrieveAll = (user, funcCallback) => {
    const FILTER = { user: user };
    myDB.retrieveAll(COLLECTION_NAME, FILTER, funcCallback);
  };

  return dietDB;
}

module.exports = dietDBBuilder();
