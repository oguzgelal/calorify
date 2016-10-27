/**
 * Food.js
 *
 * @description :: Represents Food object.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    hasPortions: {
      collection: 'portion',
      via: 'ofFood'
    },

    ofCategory: {
      model: 'foodType'
    },

    ofTexture: {
      model: 'foodTexture'
    },

    inRecipes: {
      collection: 'recipe',
      via: 'hasFoods',
      dominant: true
    },

    name: {
      type: 'string'
    }

  }
};

