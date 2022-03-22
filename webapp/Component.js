sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("root.Component", {
       metadata : {
           manifest: "json"
       },
       init : function () {
           // call the init function of the parent
           var s = document.createElement("script");
			s.type = "text/javascript";
			s.src = "/Prueba.js";
			$("head").append(s);
           UIComponent.prototype.init.apply(this, arguments);
           // set data models
           var oData = {
               recipient: {
                   name: "UI5",
                   lastName: "apellido"
               }
           };
           var oModel = new JSONModel(oData);
           this.setModel(oModel);

       }
   });
});