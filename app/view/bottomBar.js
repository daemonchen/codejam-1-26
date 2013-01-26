Ext.define("daemontest.view.bottomBar", {
    extend: 'Ext.TitleBar',
	xtype:'daemonBottombar',
    requires: [
        'Ext.Button',
        'Ext.TitleBar'
    ],
    config: { 
		id:'bottomBar',
		items: [
			{
			id:'favorite',
            icon:'resources/images/561224.png',
			iconMask: true,
            align: 'left'
        },
        {
			id:'camera',
            icon:'resources/images/561224.png',
            iconMask: true,
            align: 'right'
        }
		]
    }
});
