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
		$fh.act({'act': 'testAction'}, 
		function(res) {
			this.getOutputField().setValue(res);
		},
		function(msg, err) {
			this.getOutputField().setValue('error: ' + err);
		});
	}
	
});