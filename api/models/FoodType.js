/**
 * FoodType.js
 *
 * @description :: Superclass of food categories.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    categoryOf: {
      model: 'food'
    },

    // FK's of subtypes
    isDairy: { model: 'dairy' },
    isMeat: { model: 'meat' },
    isBean: { model: 'bean' },
    isGrain: { model: 'grain' },
    isVegetable: { model: 'vegetable' },
    isFruit: { model: 'fruit' },
    isNut: { model: 'nut' }

  }
};

