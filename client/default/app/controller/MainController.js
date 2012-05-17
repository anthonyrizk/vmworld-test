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
		$fh.act({'act': 'testAction'}, 
		function(res) {
			this.getOutputField().setValue(JSON.stringify(result));
		},
		function(msg, err) {
			this.getOutputField().setValue('error: ' + msg);
		});
	}
	
});