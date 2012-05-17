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
			this.getOutputField().text = res;
		},
		function(msg, err) {
		});
	}
	
});