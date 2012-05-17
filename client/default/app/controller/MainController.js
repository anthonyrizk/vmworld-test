Ext.define('VMworldTest.controller.MainController', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			testButton: '#testbutton',
			outputField: '#output'
		},
		control: {
			testButton: {
				tap: 'doTestAct'
			}
		}
	},
	doTestAct: function() {
		this.getOutputField().setValue('loading');
    var output = this.getOutputField();
		$fh.act({'act': 'testAction'}, 
		function(res) {
			output.setValue(JSON.stringify(res));
		},
		function(msg, err) {
			output.setValue('error: ' + msg);
		});
	}
	
});