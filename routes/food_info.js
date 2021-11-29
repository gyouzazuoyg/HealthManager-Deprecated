// var express = require("express");
// var router = express.Router();
// var path = require("path");
// var myDB = require("../public/myDB");

// /* GET home page. */
// router.get("/", function (req, res) {
//   res.sendFile(path.join(process.cwd(), "public/food_info.html"));
// });

// /* Process new food information submitted from ./food_info */
// router.post("/create", async function (req) {
//   let foodName = req.body.food_name;
//   let calorieOunce = req.body.calorie_per_ounce;
//   try {
//     myDB.retrieveFoodInfo(foodName).then((isExisting) => {
//       if (isExisting) {
//         myDB.updateFoodInfo(foodName, calorieOunce);
//       } else {
//         myDB.createFoodInfo(foodName, calorieOunce);
//       }
//     });
//     fetch("/get_food_list").then(console.log(res));
//   } catch (e) {
//     console.log(e);
//   }
// });

// /* Delete food information if existing */
// router.post("/delete", function (req, res) {
//   let foodName = req.body.food_name;
//   if (myDB.retrieveFoodInfo(foodName)) {
//     myDB.deleteFoodInfo(foodName);
//   }
//   return res;
// });

// module.exports = router;
