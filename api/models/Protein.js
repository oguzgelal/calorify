/**
 * Protein.js
 *
 * @description :: Subclass of Nutrient.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ofNutrient: {
      model: 'nutrient'
    },

    val: {
      type: 'float'
    }

  }
};

