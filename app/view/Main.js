Ext.define("daemontest.view.Main", {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'daemontest.view.carousel',
		'daemontest.view.topBar',
		'daemontest.view.bottomBar'
    ],
    config: {
       fullscreen: true,
	   layout: 'vbox',
		items: [
			{				
				xtype:'daemonTitlebar',
				docked:'top',
				flex:0,
				style: 'background-color: #5E99CC'
			},
			{
				xtype:'daemonCarousel',
				flex:1
			},
			{
				xtype:'daemonBottombar',
				flex:0,
				id:'bottomBar',
				docked:'bottom'
			}
		]
    }
});
