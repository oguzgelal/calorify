/**
 * Nutrition.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nutritions_of: {
      model: 'serving'
    },

    calories: {
      type: 'float'
    },

    carbohydrateContent: {
      type: 'float'
    },

    cholesterolContent: {
      type: 'float'
    },

    fatContent: {
      type: 'float'
    },

    fiberContent: {
      type: 'float'
    },

    proteinContent: {
      type: 'float'
    },

    saturatedFatContent: {
      type: 'float'
    },

    sodiumContent: {
      type: 'float'
    },

    sugarContent: {
      type: 'float'
    },

    transFatContent: {
      type: 'float'
    },

    unsaturatedFatContent: {
      type: 'float'
    },



  }
};

