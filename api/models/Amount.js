/**
 * Amount.js
 *
 * @description :: The exercise amount (Similar to portion of food).
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    burns: {
      model: 'calorie'
    },

    quantity: {
      type: 'float'
    },

    ofType: {
      model: 'amountType'
    },

    ofExercise: {
      model: 'exercise'
    }

  }
};

