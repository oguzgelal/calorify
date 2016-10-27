/**
 * Nutrient.js
 *
 * @description :: Super class of nutrient types.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ofPortion: {
      model: 'portion'
    },

    // FK's to subtypes
    isProtein: { model: 'protein' },
    isFat: { model: 'fat' },
    isCalorie: { model: 'calorie' }

  }
};

