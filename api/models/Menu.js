/**
 * Menu.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    subclassOf: {
      model: 'collection'
    },

    canape: {
      model: 'recipe'
    },

    starter: {
      model: 'recipe'
    },

    main_course: {
      model: 'recipe'
    },

    side_dish: {
      model: 'recipe'
    },

    dessert: {
      model: 'recipe'
    },



  }
};

