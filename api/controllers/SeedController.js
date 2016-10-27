/**
 * SeedController
 *
 * @description :: Used to seed the database
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  init: function(){

    User.create([
      { name: 'Oguz Gelal', school: 'VUB' },
      { name: 'Subhani Shaik', school: 'VUB' },
      { name: 'Cristina Merino', school: 'VUB' }
    ]).exec(function(){});

    // Create Apple
    Food.create({ name: 'Apple' }).exec(function(e, apple){
      // Create Texture Object of Apple
      FoodTexture.create({ textureOf: apple }).exec(function(e, appleTexture){
        // Link Apple with its Texture Object
        Food.update({ id: apple.id }, { ofTexture: appleTexture }).exec(function(){  });
        // Create Solid Texture of Apple
        SolidFood.create({ ofFoodTexture: appleTexture }).exec(function(e, appleTextureSolid){
          // Link Solid Texture with the Texture of Apple
          FoodTexture.update({ id: appleTexture.id }, { isSolid: appleTextureSolid }).exec(function(){});
        });
      });
      // Create Portion of Apple
      Portion.create({ ofFood: apple, quantity: 1 }).exec(function(e, applePortion){
        // Create Portion Type of Portion of Apple
        PortionType.create({ ofPortion: applePortion }).exec(function(e, applePortionType){
          // Link Apple Portion Type with Portion
          Portion.update({id: applePortion.id }, { ofType: applePortionType }).exec(function(){});
          // Create Unit for Apple Portion Type
          Unit.create({ ofPortionType: applePortionType }).exec(function(e, applePortionTypeUnit){
            // Link Unit with Apple Portion Type
            PortionType.update({id: applePortionType.id}, { isUnit: applePortionTypeUnit }).exec(function(){ });
          });
        });
        // Create Nutrient Values of Portion of Apple
        Nutrient.create({ ofPortion: applePortion }).exec(function(e, applePortionNutrient){
          // Create Calorie of Apple Portion
          Calorie.create({ ofNutrient: applePortionNutrient, val: 95 }).exec(function(e, applePortionNutrientCalorie){
            // Link Apple Portion Nutrients with Apple Portion Nutrients Calories
            Nutrient.update({ id: applePortionNutrient.id }, { isCalorie: applePortionNutrientCalorie }).exec(function(){});
          });
          // Create Fat of Apple Portion
          Fat.create({ ofNutrient: applePortionNutrient, val: 0.3 }).exec(function(e, applePortionNutrientFat){
            // Link Apple Portion Nutrients with Apple Portion Nutrients Calories
            Nutrient.update({ id: applePortionNutrient.id }, { isFat: applePortionNutrientFat }).exec(function(){});
          });
          // Create Protein of Apple Portion
          Protein.create({ ofNutrient: applePortionNutrient, val: 0.5 }).exec(function(e, applePortionNutrientProtein){
            // Link Apple Portion Nutrients with Apple Portion Nutrients Calories
            Nutrient.update({ id: applePortionNutrient.id }, { isFat: applePortionNutrientProtein }).exec(function(){});
          });
        });
      });
      // Create Food Type of Apple
      FoodType.create({ categoryOf: apple }).exec(function(e, appleCategory){
        // Link Apple with its Category
        Food.update({ id: apple.id }, { ofCategory: appleCategory }).exec(function(){ });
        // Create Fruit for Apple Food Type
        Fruit.create({ ofFoodType: appleCategory }).exec(function(e, appleCategoryFruit){
          // Link Fruit with Apple Food Type
          FoodType.find({ id: appleCategory.id }, { isFruit: appleCategoryFruit }).exec(function(){ });
        });
      });
    });


    Food.create({ name: 'Banana' }).exec(function(e, food){
      FoodTexture.create({ textureOf: food }).exec(function(e, foodTexture){
        Food.update({ id: food.id }, { ofTexture: foodTexture }).exec(function(){  });
        SolidFood.create({ ofFoodTexture: foodTexture }).exec(function(e, foodTextureSolid){
          FoodTexture.update({ id: foodTexture.id }, { isSolid: foodTextureSolid }).exec(function(){});
        });
      });
      Portion.create({ ofFood: food, quantity: 1 }).exec(function(e, foodPortion){
        PortionType.create({ ofPortion: foodPortion }).exec(function(e, foodPortionType){
          Portion.update({id: foodPortion.id }, { ofType: foodPortionType }).exec(function(){});
          Unit.create({ ofPortionType: foodPortionType }).exec(function(e, foodPortionTypeUnit){
            PortionType.update({id: foodPortionType.id}, { isUnit: foodPortionTypeUnit }).exec(function(){ });
          });
        });
        Nutrient.create({ ofPortion: foodPortion }).exec(function(e, foodPortionNutrient){
          Calorie.create({ ofNutrient: foodPortionNutrient, val: 105 }).exec(function(e, foodPortionNutrientCalorie){
            Nutrient.update({ id: foodPortionNutrient.id }, { isCalorie: foodPortionNutrientCalorie }).exec(function(){});
          });
          Fat.create({ ofNutrient: foodPortionNutrient, val: 0.4 }).exec(function(e, foodPortionNutrientFat){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientFat }).exec(function(){});
          });
          Protein.create({ ofNutrient: foodPortionNutrient, val: 1.3 }).exec(function(e, foodPortionNutrientProtein){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientProtein }).exec(function(){});
          });
        });
      });
      FoodType.create({ categoryOf: food }).exec(function(e, foodCategory){
        Food.update({ id: food.id }, { ofCategory: foodCategory }).exec(function(){ });
        Fruit.create({ ofFoodType: foodCategory }).exec(function(e, foodCategoryFruit){
          FoodType.find({ id: foodCategory.id }, { isFruit: foodCategoryFruit }).exec(function(){ });
        });
      });
    });

    Food.create({ name: 'Wine' }).exec(function(e, food){
      FoodTexture.create({ textureOf: food }).exec(function(e, foodTexture){
        Food.update({ id: food.id }, { ofTexture: foodTexture }).exec(function(){  });
        LiquidFood.create({ ofFoodTexture: foodTexture }).exec(function(e, foodTextureSolid){
          FoodTexture.update({ id: foodTexture.id }, { isLiquid: foodTextureSolid }).exec(function(){});
        });
      });
      Portion.create({ ofFood: food, quantity: 1 }).exec(function(e, foodPortion){
        PortionType.create({ ofPortion: foodPortion }).exec(function(e, foodPortionType){
          Portion.update({id: foodPortion.id }, { ofType: foodPortionType }).exec(function(){});
          Container.create({ ofPortionType: foodPortionType, name: 'glass' }).exec(function(e, foodPortionTypeUnit){
            PortionType.update({id: foodPortionType.id}, { isContainer: foodPortionTypeUnit }).exec(function(){ });
          });
        });
        Nutrient.create({ ofPortion: foodPortion }).exec(function(e, foodPortionNutrient){
          Calorie.create({ ofNutrient: foodPortionNutrient, val: 85 }).exec(function(e, foodPortionNutrientCalorie){
            Nutrient.update({ id: foodPortionNutrient.id }, { isCalorie: foodPortionNutrientCalorie }).exec(function(){});
          });
          Fat.create({ ofNutrient: foodPortionNutrient, val: 0 }).exec(function(e, foodPortionNutrientFat){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientFat }).exec(function(){});
          });
          Protein.create({ ofNutrient: foodPortionNutrient, val: 0.1 }).exec(function(e, foodPortionNutrientProtein){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientProtein }).exec(function(){});
          });
        });
      });
    });

    Food.create({ name: 'Beer' }).exec(function(e, food){
      FoodTexture.create({ textureOf: food }).exec(function(e, foodTexture){
        Food.update({ id: food.id }, { ofTexture: foodTexture }).exec(function(){  });
        LiquidFood.create({ ofFoodTexture: foodTexture }).exec(function(e, foodTextureSolid){
          FoodTexture.update({ id: foodTexture.id }, { isLiquid: foodTextureSolid }).exec(function(){});
        });
      });
      Portion.create({ ofFood: food, quantity: 1 }).exec(function(e, foodPortion){
        PortionType.create({ ofPortion: foodPortion }).exec(function(e, foodPortionType){
          Portion.update({id: foodPortion.id }, { ofType: foodPortionType }).exec(function(){});
          Container.create({ ofPortionType: foodPortionType, name: 'can' }).exec(function(e, foodPortionTypeUnit){
            PortionType.update({id: foodPortionType.id}, { isContainer: foodPortionTypeUnit }).exec(function(){ });
          });
        });
        Nutrient.create({ ofPortion: foodPortion }).exec(function(e, foodPortionNutrient){
          Calorie.create({ ofNutrient: foodPortionNutrient, val: 154 }).exec(function(e, foodPortionNutrientCalorie){
            Nutrient.update({ id: foodPortionNutrient.id }, { isCalorie: foodPortionNutrientCalorie }).exec(function(){});
          });
          Fat.create({ ofNutrient: foodPortionNutrient, val: 0 }).exec(function(e, foodPortionNutrientFat){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientFat }).exec(function(){});
          });
          Protein.create({ ofNutrient: foodPortionNutrient, val: 1.6 }).exec(function(e, foodPortionNutrientProtein){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientProtein }).exec(function(){});
          });
        });
      });
    });


  }

};
