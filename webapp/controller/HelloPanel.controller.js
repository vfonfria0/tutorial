sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
 ], function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("root.controller.HelloPanel", {
       onShowHello : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipientName = this.getView().getModel().getProperty("/recipient/name");
          var sRecipientLasName
          var sMsg = oBundle.getText("helloMsg", [sRecipientName,sRecipientLasName]);
          // show message
          MessageToast.show(sMsg);
       },
       onOpenDialog : function () {

           // create dialog lazily
           if (!this.pDialog) {
               this.pDialog = this.loadFragment({
                   name: "root.view.HelloDialog"
               });
           } 
           this.pDialog.then(function(oDialog) {
               oDialog.open();
           });
       },

       onCloseDialog : function () {
           // note: We don't need to chain to the pDialog promise, since this event-handler
           // is only called from within the loaded dialog itself.
           this.byId("helloDialog").close();
       }
    });
 });