/**
 * FoodTexture.js
 *
 * @description :: Type of the food (liquid or solid).
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    textureOf: {
      model: 'food'
    },

    // FK's of sub classes
    isSolid: { model: 'solidFood' },
    isLiquid: { model: 'liquidFood' }
  }
};

