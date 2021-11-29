// var express = require("express");
// var router = express.Router();
// var path = require("path");
// var myDB = require("../public/myDB");

// /* GET home page. */
// router.get("/", function (req, res) {
//   res.sendFile(path.join(process.cwd(), "public/diet_plan.html"));
// });

// /* Process new diet plan item submitted */
// router.post("/create", function (req, res) {
//   let foodName = req.body.food_name;
//   let quantity = req.body.quantity;
//   try {
//     myDB.retrieveDietPlanItem(foodName).then((isExisting) => {
//       if (isExisting) {
//         myDB.updateDietPlanItem(foodName, quantity);
//       } else {
//         myDB.createDietPlanItem(foodName, quantity);
//       }
//     });
//   } catch (e) {
//     console.log(e);
//   }
//   res.redirect("/diet_plan");
//   return res;
// });

// /* Delete die plan item if existing */
// router.post("/delete", function (req, res) {
//   let foodName = req.body.food_name;
//   if (myDB.retrieveDietPlanItem(foodName)) {
//     myDB.deleteDietPlanItem(foodName);
//   }
//   res.redirect("/diet_plan");
//   return res;
// });

// module.exports = router;
