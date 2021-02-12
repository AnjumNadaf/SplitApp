sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("SA.splitapp.controller.list", {
			onInit: function () {
              this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			},

			onLoginBack:function(){
				debugger;
				this.oRouter.navTo("RouteLogin");

			},
			onChangeSelection:function(oEvent){
				debugger;
				var path = oEvent.getParameter("listItem").getBindingContextPath();
				this.oRouter.navTo("RoutesplitApp",{
					compName:path.split("/")[path.split("/").length-1]
				})

			}

		});
	});
