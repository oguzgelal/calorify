/**
 * ParseController
 *
 * @description :: Server-side logic for managing Parses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var rdf = require('rdf-ext');

module.exports = {

  init: function(req, res){
    return res.view('parse');
  },

  upload: function(req, res){
    var self = this;
    req.file('rdf').upload(function (err, files) {
      if (err){ return res.serverError(err); }
      self.parse(req, res, files);
    });
  },

  parse: function(req, res, files){

    //return res.json({
    //  message: files.length + ' file(s) uploaded successfully!',
    //  files: files
    //});

    var uri = 'https://example.org/resource.ttl';
    var body = '<a> <b> <c> .';
    var mimeType = 'text/turtle';
    var store = $rdf.graph();

    return res.view('parse', {
      message: files.length + ' file(s) uploaded successfully!',
      files: files
    });
  }

};

