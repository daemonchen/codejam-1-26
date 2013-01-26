Ext.define('daemontest.controller.topBar', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
           
        },

        refs: {
            //loginButton: 'button[action=login]'
        }
    },

    doLogin: function() {
        //called whenever the Login button is tapped
    },

    doLogout: function() {
        //called whenever any Button with action=logout is tapped
    }
});