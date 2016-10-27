/**
 * Portion.js
 *
 * @description :: The object that holds the portion sizes of foods, and associates it with nutrients.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    hasNutrients: {
      collection: 'nutrient',
      via: 'ofPortion'
    },

    ofFood: {
      model: 'food'
    },

    quantity: {
      type: 'float'
    },

    ofType: {
      model: 'portionType'
    }

  }
};

