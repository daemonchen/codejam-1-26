Ext.define("daemontest.view.carousel", {
    extend: 'Ext.Carousel',
	xtype:'daemonCarousel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {		
		items: [
			{
				html : 'Item 1',
				style: 'background-color: #5E99CC'
			},
			{
				html : 'Item 2',
				style: 'background-color: #759E60'
			},
			{
				html : 'Item 3'
			}
		]
    }
});
