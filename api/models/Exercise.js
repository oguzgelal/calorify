/**
 * Exercise.js
 *
 * @description :: Represents Exercise object.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    hasAmounts: {
      collection: 'amount',
      via: 'ofExercise'
    },

    ofCategory: {
      model: 'exerciseType'
    },

  }
};

