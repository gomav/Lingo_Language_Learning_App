// requests are successfully requested due to making the modules
// available
var beglobal = require('../translate.js');
var languageKey = require('../languages.js');

// The following objects (index, translate, output) need to
// reflect the routing values used in the routing - app.js
var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	translate: function(req, res){
		res.render('translate');
	},
	output: function(req, res){
		// re-defining for better syntax to be used while sending
		// the request to beglobal. 
		var fromLanguage = languageKey[req.body.from];
		var toLanguage = languageKey[req.body.to];
		beglobal.translations.translate(
  	{text: req.body.word, from: fromLanguage, to: toLanguage},
  	function(err, results) {
    	if (err) {
      	return console.log(err);
    }
		console.log('results');
    res.send(results);
  });
}

};

// makes indexController available to other modules
module.exports = indexController;
