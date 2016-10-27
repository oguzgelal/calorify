/**
 * PortionType.js
 *
 * @description :: What kind of serving type the portion object is consist of.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ofPortion: {
      model: 'portion'
    },

    // FK's of subtypes
    isUnit: { model: 'unit' },
    isGram: { model: 'gram' },
    isContainer: { model: 'container' }

  }
};

