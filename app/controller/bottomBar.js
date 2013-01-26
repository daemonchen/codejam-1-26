Ext.define('daemontest.controller.bottomBar', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
           cameraButton:{
			tap:'takePhoto'
		   }
        },

        refs: {
            cameraButton:'#bottomBar'
        }
    },

    takePhoto: function() {
		Ext.Msg.alert("success");		
        //called whenever the Login button is tapped
		Ext.device.Camera.capture({
			success: function(image) {
				Ext.Msg.alert("success");
				//imageView.setSrc(image);
			},
			quality: 75,
			width: 200,
			height: 200,
			destination: 'data'
		});
    },
	launch: function(app) {
      
    }
});