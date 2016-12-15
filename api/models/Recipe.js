/**
 * Recipe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    produces: {
      model: 'food'
    },

    stages: {
      model: 'stageSequence'
    },

    diet: {
      model: 'diet'
    },

    cuisine: {
      model: 'cuisine'
    },

    occasion: {
      model: 'occasion'
    },

    serve_as: {
      model: 'course'
    },

    serves: {
      type: 'string'
    },

    recipe_has_nutritions: {
      model: 'recipeNutrition'
    }

  }
};

