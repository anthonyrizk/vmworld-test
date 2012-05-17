exports.testAction = testAction;

var testAction: function(reqJson, callback) {
	callback(null, {ret: 'test'});
}