/**
 * ExerciseType.js
 *
 * @description :: Type of the exercise - similar to Food Type.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    categoryOf: {
      model: 'exercise'
    },

    // FK's to sub types
    isCardio: { model: 'cardio' },
    isMuscle: { model: 'muscle' }

  }
};

