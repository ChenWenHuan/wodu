Ext.define('Wodu.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
      refs: {

      },
      control: {
        'main': {
          show: 'onMainShow'
        }
      }
    },

    onMainShow: function(theMainTabPanel, eOpts) {
      var store = Ext.getStore('BooksReadingStore');
      if (0 === store.getCount()) {
        Wodu.util.Util.getBookCollections('reading', store);
      }
    }


});
