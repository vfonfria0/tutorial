sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("root.controller.App", {
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipientName = this.getView().getModel().getProperty("/recipient/name"); //lee atributos del componente
         var sRecipientLastName = this.getView().getModel().getProperty("/recipient/lastName");
         var sMsg = oBundle.getText("helloMsg", [sRecipientName,sRecipientLastName]);
         // show message
         MessageToast.show(sMsg);
      }
   });
});
