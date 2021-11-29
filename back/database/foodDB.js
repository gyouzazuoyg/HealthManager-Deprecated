const myDB = require("./myDB");

function foodDBBuilder() {
  const foodDB = {};
  const COLLECTION_NAME = "food_info";

  foodDB.create = (user, foodName, calorieOunce) => {
    const DOCUMENT = {
      user: user,
      foodName: foodName,
      calorieOunce: calorieOunce,
    };
    const FILTER = { user: user, foodName: foodName };
    myDB.isExisting(COLLECTION_NAME, FILTER).then((flag) => {
      if (flag) {
        myDB.update(COLLECTION_NAME, FILTER, DOCUMENT);
        console.log("Existing. Updated!");
      } else {
        myDB.create(COLLECTION_NAME, DOCUMENT);
        console.log("Not Existing. Created!");
      }
    });
  };

  foodDB.delete = (user, foodName) => {
    const FILTER = { user: user, foodName: foodName };
    myDB.isExisting(COLLECTION_NAME, FILTER).then((flag) => {
      if (flag) {
        myDB.delete(COLLECTION_NAME, FILTER);
        console.log("Food Deleted Successfully!");
      } else {
        console.log("Delete failed. The food is not existing!");
      }
    });
  };

  foodDB.retrieveAll = (user, funcCallback) => {
    const FILTER = { user: user };
    myDB.retrieveAll(COLLECTION_NAME, FILTER, funcCallback);
  };

  return foodDB;
}

module.exports = foodDBBuilder();
