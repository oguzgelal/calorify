/**
 * Recipe.js
 *
 * @description :: Multiple food objects can make a recipe.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    hasFoods: {
      collection: 'food',
      via: 'inRecipes'
    }

  }
};

