/**
 * Calorie.js
 *
 * @description :: Subclass of Nutrient - also associates with Amount.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ofNutrient: {
      model: 'nutrient'
    },

    val: {
      type: 'float'
    },

    burnedBy: {
      model: 'amount'
    }

  }
};

