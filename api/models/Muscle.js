/**
 * Muscle.js
 *
 * @description :: Subclass of ExerciseType.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ofExerciseType: {
      model: 'exerciseType'
    },

    // FK's to sub types
    isCalf: { model: 'calf' },
    isShoulder: { model: 'shoulder' },
    isBack: { model: 'back' },
    isChest: { model: 'chest' },
    isTricep: { model: 'tricep' },
    isAbdominal: { model: 'abdominal' },
    isBicep: { model: 'bicep' },
    isLeg: { model: 'leg' }

  }
};

