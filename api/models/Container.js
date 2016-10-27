/**
 * Container.js
 *
 * @description :: A portion type to represent amount of certain foods - ie. One flass of wine, One plate of rice etc.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    ofPortionType: {
      model: 'portionType'
    },

    containerName: {
      type: 'string'
    }

  }
};

