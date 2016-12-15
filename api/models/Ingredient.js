/**
 * Ingredient.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    food: {
      model: 'food'
    },

    quantity: {
      type: 'float'
    },

    metric_quantity: {
      type: 'string'
    },

    imperial_quantity: {
      type: 'string'
    }

  }
};

