sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("SA.splitapp.controller.splitApp", {
			onInit: function () {
             this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			 this.oRouter.attachRoutePatternMatched(this.onGetData,this);


			},
			// onGetData:function(oEvent){
            // debugger;
			// this.path = oEvent.getParameter("arguments").compName;
			// this.path = "/Company"+this.path+"/EmployeeDetails";
			// var list = this.getView().byId("idList").bindItems({
			// 	path:this.path,
			// 	template:new sap.m.ObjectListItem({
			// 		"title":"{EmpName}"
			// 	})

			// });

			// },
			onGetData:function(oEvent){
				debugger;
				
				this.sPath= oEvent.getParameter("arguments").compName;
				this.sPath="/Compnay/"+this.sPath+"/EmployeeDetails";
				var oList= this.getView().byId("idList").bindItems({
					path:this.sPath,
					template: new sap.m.ObjectListItem({
						title:"{EmpName}"
						

					
					})
				});
			},

			onSelectEmployee:function(oEvent){
				debugger;
				var bindData = oEvent.getParameter("listItem").getBindingContextPath();
				this.getView().byId("idsimpleform").bindElement(bindData);

                           
			},

			onBackLogin:function(){
				debugger;
				this.oRouter.navTo("Routelist");
			}
		});
	});


