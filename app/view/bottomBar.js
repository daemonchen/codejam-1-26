Ext.define("daemontest.view.bottomBar", {
    extend: 'Ext.Img',
	xtype:'daemonBottombar',
    requires: [
        'Ext.Button',
        'Ext.TitleBar'
    ],
    config: { 
		id:'bottomBar',
		height:60,
		src:'resources/images/561224.png'		
    }
});
