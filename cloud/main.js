exports.testAction = function(reqJson, callback) {
	callback(null, {ret: 'test', another: 'blah'});
};