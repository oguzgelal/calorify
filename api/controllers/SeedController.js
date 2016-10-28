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
          FoodType.update({ id: appleCategory.id }, { isFruit: appleCategoryFruit }).exec(function(){ });
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
          FoodType.update({ id: foodCategory.id }, { isFruit: foodCategoryFruit }).exec(function(){ });
        });
      });
    });

Food.create({ name: 'Fries' }).exec(function(e, food){
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
          Calorie.create({ ofNutrient: foodPortionNutrient, val: 312 }).exec(function(e, foodPortionNutrientCalorie){
            Nutrient.update({ id: foodPortionNutrient.id }, { isCalorie: foodPortionNutrientCalorie }).exec(function(){});
          });
          Fat.create({ ofNutrient: foodPortionNutrient, val: 15 }).exec(function(e, foodPortionNutrientFat){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientFat }).exec(function(){});
          });
          Protein.create({ ofNutrient: foodPortionNutrient, val: 3.4 }).exec(function(e, foodPortionNutrientProtein){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientProtein }).exec(function(){});
          });
        });
      });
      FoodType.create({ categoryOf: food }).exec(function(e, foodCategory){
        Food.update({ id: food.id }, { ofCategory: foodCategory }).exec(function(){ });
        Fruit.create({ ofFoodType: foodCategory }).exec(function(e, foodCategoryFruit){
          FoodType.update({ id: foodCategory.id }, { isFruit: foodCategoryFruit }).exec(function(){ });
        });
      });
    });

Food.create({ name: 'Eggs' }).exec(function(e, food){
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
          Calorie.create({ ofNutrient: foodPortionNutrient, val: 155 }).exec(function(e, foodPortionNutrientCalorie){
            Nutrient.update({ id: foodPortionNutrient.id }, { isCalorie: foodPortionNutrientCalorie }).exec(function(){});
          });
          Fat.create({ ofNutrient: foodPortionNutrient, val: 11 }).exec(function(e, foodPortionNutrientFat){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientFat }).exec(function(){});
          });
          Protein.create({ ofNutrient: foodPortionNutrient, val: 13 }).exec(function(e, foodPortionNutrientProtein){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientProtein }).exec(function(){});
          });
        });
      });
      FoodType.create({ categoryOf: food }).exec(function(e, foodCategory){
        Food.update({ id: food.id }, { ofCategory: foodCategory }).exec(function(){ });
        Fruit.create({ ofFoodType: foodCategory }).exec(function(e, foodCategoryFruit){
          FoodType.update({ id: foodCategory.id }, { isFruit: foodCategoryFruit }).exec(function(){ });
        });
      });
    });

Food.create({ name: 'Pasta' }).exec(function(e, food){
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
          Calorie.create({ ofNutrient: foodPortionNutrient, val: 155 }).exec(function(e, foodPortionNutrientCalorie){
            Nutrient.update({ id: foodPortionNutrient.id }, { isCalorie: foodPortionNutrientCalorie }).exec(function(){});
          });
          Fat.create({ ofNutrient: foodPortionNutrient, val: 1.1 }).exec(function(e, foodPortionNutrientFat){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientFat }).exec(function(){});
          });
          Protein.create({ ofNutrient: foodPortionNutrient, val: 5 }).exec(function(e, foodPortionNutrientProtein){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientProtein }).exec(function(){});
          });
        });
      });
      FoodType.create({ categoryOf: food }).exec(function(e, foodCategory){
        Food.update({ id: food.id }, { ofCategory: foodCategory }).exec(function(){ });
        Fruit.create({ ofFoodType: foodCategory }).exec(function(e, foodCategoryFruit){
          FoodType.update({ id: foodCategory.id }, { isFruit: foodCategoryFruit }).exec(function(){ });
        });
      });
    });

Food.create({ name: 'Bread' }).exec(function(e, food){
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
          Calorie.create({ ofNutrient: foodPortionNutrient, val: 265 }).exec(function(e, foodPortionNutrientCalorie){
            Nutrient.update({ id: foodPortionNutrient.id }, { isCalorie: foodPortionNutrientCalorie }).exec(function(){});
          });
          Fat.create({ ofNutrient: foodPortionNutrient, val: 3.2 }).exec(function(e, foodPortionNutrientFat){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientFat }).exec(function(){});
          });
          Protein.create({ ofNutrient: foodPortionNutrient, val: 9 }).exec(function(e, foodPortionNutrientProtein){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientProtein }).exec(function(){});
          });
        });
      });
      FoodType.create({ categoryOf: food }).exec(function(e, foodCategory){
        Food.update({ id: food.id }, { ofCategory: foodCategory }).exec(function(){ });
        Fruit.create({ ofFoodType: foodCategory }).exec(function(e, foodCategoryFruit){
          FoodType.update({ id: foodCategory.id }, { isFruit: foodCategoryFruit }).exec(function(){ });
        });
      });
    });

    Food.create({ name: 'Sausage' }).exec(function(e, food){
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
          Calorie.create({ ofNutrient: foodPortionNutrient, val: 301 }).exec(function(e, foodPortionNutrientCalorie){
            Nutrient.update({ id: foodPortionNutrient.id }, { isCalorie: foodPortionNutrientCalorie }).exec(function(){});
          });
          Fat.create({ ofNutrient: foodPortionNutrient, val: 27 }).exec(function(e, foodPortionNutrientFat){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientFat }).exec(function(){});
          });
          Protein.create({ ofNutrient: foodPortionNutrient, val: 12 }).exec(function(e, foodPortionNutrientProtein){
            Nutrient.update({ id: foodPortionNutrient.id }, { isFat: foodPortionNutrientProtein }).exec(function(){});
          });
        });
      });
      FoodType.create({ categoryOf: food }).exec(function(e, foodCategory){
        Food.update({ id: food.id }, { ofCategory: foodCategory }).exec(function(){ });
        Fruit.create({ ofFoodType: foodCategory }).exec(function(e, foodCategoryFruit){
          FoodType.update({ id: foodCategory.id }, { isFruit: foodCategoryFruit }).exec(function(){ });
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

    
    // Create the exercise
    Exercise.create({ name: 'Sit-ups' }).exec(function(e, exercise){
      // Determin that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 50 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 20 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 200, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of sit-ups
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // Sit-ups is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Sit-ups is a muscle exercise that trains abdominals
          Abdominal.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleAbs){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isAbdominal: exerciseCategoryMuscleAbs }).exec(function(){ });
          });
        });
      });
    });


    ///////OSCAR'S EXERCISES'
    // Create the exercise
    Exercise.create({ name: 'Chin-ups' }).exec(function(e, exercise){
      // Determine that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 50 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 20 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 100, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of chin-ups
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // Chin-ups is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Chin-ups is a muscle exercise that trains abdominals
          Back.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleBack){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isBack: exerciseCategoryMuscleBack }).exec(function(){ });
          });
        });
      });
    });


    
    // Create the exercise pull-ups
    Exercise.create({ name: 'Pull-ups' }).exec(function(e, exercise){
      // Determin that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 50 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 20 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 100, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of sit-ups
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // Pull-ups is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Sit-ups is a muscle exercise that trains back
          Back.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleBack){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isBack: exerciseCategoryMuscleBack }).exec(function(){ });
          });
        });
      });
    });




// Create the exercise push-ups
    Exercise.create({ name: 'Push-ups' }).exec(function(e, exercise){
      // Determin that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 50 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 30 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 300, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of sit-ups
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // Sit-ups is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Sit-ups is a muscle exercise that trains abdominals
          Chest.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleChest){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isChest: exerciseCategoryMuscleChest }).exec(function(){ });
          });
        });
      });
    });


// Create the exercise bench press
    Exercise.create({ name: 'Bench-Press' }).exec(function(e, exercise){
      // Determin that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 50 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 16 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 120, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of bench-press
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // bench-press is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Sit-ups is a muscle exercise that trains abdominals
          Chest.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleChest){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isChest: exerciseCategoryMuscleChest }).exec(function(){ });
          });
        });
      });
    });

    // Create the exercise lat pull up
    Exercise.create({ name: 'Lat Pull Ups' }).exec(function(e, exercise){
      // Determin that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 50 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 30 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 70, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of sit-ups
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // Sit-ups is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Sit-ups is a muscle exercise that trains abdominals
          Back.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleBack){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isBack: exerciseCategoryMuscleBack }).exec(function(){ });
          });
        });
      });
    });


        // Create the exercise overhead press
    Exercise.create({ name: 'Overhead Press' }).exec(function(e, exercise){
      // Determin that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 50 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 20 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 130, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of sit-ups
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // Sit-ups is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Sit-ups is a muscle exercise that trains abdominals
          Shoulder.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleShoulder){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isShoulder: exerciseCategoryMuscleShoulder }).exec(function(){ });
          });
        });
      });
    });

    // Create the exercise triceps extension
    Exercise.create({ name: 'Triceps Extension' }).exec(function(e, exercise){
      // Determin that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 50 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 20 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 30, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of sit-ups
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // Sit-ups is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Sit-ups is a muscle exercise that trains abdominals
          Tricep.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleTricep){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isTricep: exerciseCategoryMuscleTricep }).exec(function(){ });
          });
        });
      });
    });




    // Create the exercise biceps curl
    Exercise.create({ name: 'Biceps Curl' }).exec(function(e, exercise){
      // Determin that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 50 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 15 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 25, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of sit-ups
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // Sit-ups is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Sit-ups is a muscle exercise that trains abdominals
          Bicep.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleBicep){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isBicep: exerciseCategoryMuscleBicep }).exec(function(){ });
          });
        });
      });
    });


    // Create the exercise Dumbbell Shrug
    Exercise.create({ name: 'Dumbbell Shrug' }).exec(function(e, exercise){
      // Determin that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 20 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 20 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 100, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of sit-ups
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // Sit-ups is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Sit-ups is a muscle exercise that trains abdominals
          Shoulder.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleShoulder){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isShoulder: exerciseCategoryMuscleShoulder }).exec(function(){ });
          });
        });
      });
    });

// Create the exercise leg curl
    Exercise.create({ name: 'Leg-Curl' }).exec(function(e, exercise){
      // Determin that the amount has the quantity of 50 (whether it is 50 repetitions or 50 minutes is not set yet)
      Amount.create({ ofExercise: exercise, quantity: 50 }).exec(function(e, exerciseAmount){
        AmountType.create({ ofAmount: exerciseAmount }).exec(function(e, exerciseAmountType){
          Amount.update({ id: exerciseAmount.id }, { ofType: exerciseAmountType }).exec(function(){ });
          // This is where you determine that the amount type is repetitions (with 20kg)
          Repetition.create({ ofAmountType: exerciseAmountType, weight: 40 }).exec(function(e, exerciseAmountTypeRepetition){
            AmountType.update({ id: exerciseAmountType.id }, { isRepetition: exerciseAmountTypeRepetition }).exec(function(){ });
          });
        });
        // Create calorie object with 200, and hook it up with the amount (50 reps with 20kg = 200 kcal)
        Calorie.create({ val: 100, burnedBy: exerciseAmount }).exec(function(e, exerciseAmountCalorie){
          Amount.update({ id: exerciseAmount.id }, { burns: exerciseAmountCalorie }).exec(function(){ });
        });
      });
      // Create the exercise type of sit-ups
      ExerciseType.create({ categoryOf: exercise }).exec(function(e, exerciseCategory){
        Exercise.update({ id: exercise.id }, { ofCategory: exerciseCategory }).exec(function(){ });
        // Sit-ups is a muscle exercise
        Muscle.create({ ofExerciseType: exerciseCategory }).exec(function(e, exerciseCategoryMuscle){
          ExerciseType.update({ id: exerciseCategory.id }, { isMuscle: exerciseCategoryMuscle }).exec(function(){ });
          // Sit-ups is a muscle exercise that trains abdominals
          Leg.create({ ofMuscleExercise: exerciseCategoryMuscle }).exec(function(e, exerciseCategoryMuscleLeg){
            Muscle.update({ id: exerciseCategoryMuscle.id }, { isLeg: exerciseCategoryMuscleLeg }).exec(function(){ });
          });
        });
      });
    });


    

  }

};
