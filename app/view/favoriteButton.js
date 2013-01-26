Ext.define("daemontest.view.bottomBar", {
    extend: 'Ext.Panel',
	xtype:'daemonBottombar',
    requires: [
        'Ext.Button',
        'Ext.TitleBar'
    ],
    config: { 
		id:'bottomBar',

		items: [
			{
			id:'myFavorite',
			width:60,
			height:60,
			xtype:'button',
            icon:'resources/images/561224.png',
			iconMask: true           
        },
        {
			id:'myCamera',
			width:60,
			height:60,
			xtype:'button',
            icon:'resources/images/561224.png',
            iconMask: true
        }
		]
    }
});
