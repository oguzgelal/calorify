/**
 * Food.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string'
    },

    shopping_category: {
      model: 'shoppingCategory'
    },

    at_its_best: {
      model: 'season'
    },

    food_has_nutritions: {
      model: 'foodNutrition'
    }

  }
};

