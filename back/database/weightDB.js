const myDB = require("./myDB");

function weightDBBuilder() {
  const weightDB = {};
  const COLLECTION_NAME = "weight_records";

  weightDB.create = (user, record_date, weight_value) => {
    const DOCUMENT = {
      user: user,
      record_date: record_date,
      weight_value: weight_value,
    };
    const FILTER = { user: user, record_date: record_date };
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

  weightDB.delete = (user, record_date) => {
    const FILTER = { user: user, record_date: record_date };
    myDB.isExisting(COLLECTION_NAME, FILTER).then((flag) => {
      if (flag) {
        myDB.delete(COLLECTION_NAME, FILTER);
      } else {
        console.log("Delete failed. The food is not existing!");
      }
    });
  };

  weightDB.retrieveAll = (user, funcCallback) => {
    const FILTER = { user: user };
    myDB.retrieveAll(COLLECTION_NAME, FILTER, funcCallback);
  };

  return weightDB;
}

module.exports = weightDBBuilder();
