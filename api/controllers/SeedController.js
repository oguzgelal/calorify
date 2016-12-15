/**
 * SeedController
 *
 * @description :: Used to seed the database
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  init: function (req, res) {

    Food.create({ name: 'Apple' }).exec(function (e, food) {
      Season.create({ name: 'Summer' }).exec(function (e, season) {
        Serving.create({ servingSize: 1.0, servingType: 'unit' }).exec(function (e, serving) {
          Nutrition.create({
            nutritions_of: serving,
            calories: 95.0,
            carbohydrateContent: 25.0,
            cholesterolContent: 0.0,
            fatContent: 0.3,
            transFatContent: 0.0,
            saturatedFatContent: 0.1,
            unsaturatedFatContent: 0.2,
            sodiumContent: 1.8,
            fiberContent: 2.4,
            proteinContent: 0.5,
            sugarContent: 10.0
          }).exec(function (e, nutrition) {
            FoodNutrition.create({ is: nutrition }).exec(function (e, foodNutrition) {
              Food.update({ id: food.id }, {
                at_its_best: season,
                food_has_nutritions: foodNutrition
              }).exec(function () { });
            });
          });
        });
      });
    });


    Food.create({ name: 'Banana' }).exec(function (e, food) {
      Season.create({ name: 'Summer' }).exec(function (e, season) {
        Serving.create({ servingSize: 1.0, servingType: 'unit' }).exec(function (e, serving) {
          Nutrition.create({
            nutritions_of: serving,
            calories: 105.0,
            carbohydrateContent: 27.0,
            cholesterolContent: 0.0,
            fatContent: 0.4,
            transFatContent: 0.0,
            saturatedFatContent: 0.1,
            unsaturatedFatContent: 0.3,
            sodiumContent: 1.2,
            fiberContent: 2.6,
            proteinContent: 1.3,
            sugarContent: 14.0
          }).exec(function (e, nutrition) {
            FoodNutrition.create({ is: nutrition }).exec(function (e, foodNutrition) {
              Food.update({ id: food.id }, {
                at_its_best: season,
                food_has_nutritions: foodNutrition
              }).exec(function () { });
            });
          });
        });
      });
    });

    Food.create({ name: 'Orange' }).exec(function (e, food) {
      Season.create({ name: 'Summer' }).exec(function (e, season) {
        Serving.create({ servingSize: 1.0, servingType: 'unit' }).exec(function (e, serving) {
          Nutrition.create({
            nutritions_of: serving,
            calories: 62.0,
            carbohydrateContent: 15.0,
            cholesterolContent: 0.0,
            fatContent: 0.2,
            transFatContent: 0.0,
            saturatedFatContent: 0.2,
            unsaturatedFatContent: 0.0,
            sodiumContent: 0.0,
            fiberContent: 3.1,
            proteinContent: 1.3,
            sugarContent: 12.0
          }).exec(function (e, nutrition) {
            FoodNutrition.create({ is: nutrition }).exec(function (e, foodNutrition) {
              Food.update({ id: food.id }, {
                at_its_best: season,
                food_has_nutritions: foodNutrition
              }).exec(function () { });
            });
          });
        });
      });
    });

    Food.create({ name: 'Feta Cheese' }).exec(function (e, food) {
      Season.create({ name: 'Any Time' }).exec(function (e, season) {
        Serving.create({ servingSize: 100.0, servingType: 'grams' }).exec(function (e, serving) {
          Nutrition.create({
            nutritions_of: serving,
            calories: 264.0,
            carbohydrateContent: 4.1,
            cholesterolContent: 89.0,
            fatContent: 21.0,
            transFatContent: 0.8,
            saturatedFatContent: 15.0,
            unsaturatedFatContent: 5.2,
            sodiumContent: 1.116,
            fiberContent: 0.0,
            proteinContent: 14.0,
            sugarContent: 4.1
          }).exec(function (e, nutrition) {
            FoodNutrition.create({ is: nutrition }).exec(function (e, foodNutrition) {
              Food.update({ id: food.id }, {
                at_its_best: season,
                food_has_nutritions: foodNutrition
              }).exec(function () { });
            });
          });
        });
      });
    });

    Food.create({ name: 'Spinach' }).exec(function (e, food) {
      Season.create({ name: 'Winter' }).exec(function (e, season) {
        Serving.create({ servingSize: 100.0, servingType: 'grams' }).exec(function (e, serving) {
          Nutrition.create({
            nutritions_of: serving,
            calories: 23.0,
            carbohydrateContent: 3.6,
            cholesterolContent: 89.0,
            fatContent: 0.4,
            transFatContent: 0.1,
            saturatedFatContent: 0.1,
            unsaturatedFatContent: 0.2,
            sodiumContent: 79.0,
            fiberContent: 2.2,
            proteinContent: 2.9,
            sugarContent: 0.4
          }).exec(function (e, nutrition) {
            FoodNutrition.create({ is: nutrition }).exec(function (e, foodNutrition) {
              Food.update({ id: food.id }, {
                at_its_best: season,
                food_has_nutritions: foodNutrition
              }).exec(function () { });
            });
          });
        });
      });
    });


    return res.view('seed');
  }

};
