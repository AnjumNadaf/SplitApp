sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("SA.splitapp.controller.login", {
			onInit: function () {
            //    this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			   var that = this;

			//    window.setTimeout(function(){
			// 	that.byId("changingButton").setText("Changed text");
			//    },0000);

			},
			onLogin:function(){
				debugger;
				var name = this.getView().byId("userId").getValue();
				var pass = this.getView().byId("userPassword").getValue();

				if(name == "" || undefined && pass == "" || undefined ){
					sap.m.MessageToast.show("Please Enter Valid Credentials");
				}else{
					this.oRouter.navTo("Routelist");
				}


			}
		});
	});
