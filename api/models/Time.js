/**
 * Time.js
 *
 * @description :: Represents the amount of exercise done as time.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ofAmountType: {
      model: 'amountType'
    },

    timeUnit: {
      type: 'string',
      enum: ['sec', 'min', 'hour'],
      defaultsTo: 'min'
    }

  }
};

