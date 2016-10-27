/**
 * AmountType.js
 *
 * @description :: Type of the amount (like PortionType of portions).
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ofAmount: {
      model: 'amount'
    },

    // FK's of subtypes
    isTime: { model: 'time' },
    isRepetition: { model: 'repetition' }

  }
};

