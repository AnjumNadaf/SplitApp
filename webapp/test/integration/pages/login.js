// sap.ui.define([
// 	"sap/ui/test/Opa5",
// 	"sap/ui/test/actions/Press",
// 	"sap/ui/test/matchers/PropertyStrictEquals",
// 	"sap/ui/test/matchers/Properties",
// 				"sap/ui/test/matchers/Ancestor"
// ], function (Opa5,Press,PropertyStrictEquals,Properties,Ancestor) {
// 	"use strict";
// 	var sViewName = "login";
// 	Opa5.createPageObjects({
// 		onTheAppPage: {

// 			actions: {


// 				iPressOnTheButton: function () {
// 					return this.waitFor({
// 						viewName: sViewName,
// 						id: "helloDialogButton",
// 						actions: new Press(),
// 						errorMessage: "did not find the Button"
// 					});
// 				}

// 			},

// 			assertions: {

// 				iShouldSeeTheApp: function () {
// 					return this.waitFor({
// 						id: "app",
// 						viewName: sViewName,
// 						success: function () {
// 							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
// 						},
// 						errorMessage: "Did not find the " + sViewName + " view"
// 					});
// 				},
// 				theButtonShouldHaveADifferentText: function () {
// 					return this.waitFor({
// 						viewName: sViewName,
// 						id: "helloDialogButton",
// 						matchers: new PropertyStrictEquals({
// 							name: "text",
// 							value: "I got pressed"
// 						}),
// 						success: function (oButton) {
// 							Opa5.assert.ok(true, "The button's text changed to: " + oButton.getText());
// 						},
// 						errorMessage: "did not change the Button's text"
// 					});
// 				}
// 			}
// 		}
// 	});


	
// });



sap.ui.define([
	"sap/ui/test/Opa5",

	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/PropertyStrictEquals"
], function (Opa5, Press, PropertyStrictEquals) {
	"use strict";
	var sViewName = "login";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
				// iPressOnTheButton: function () {
				// 	return this.waitFor({
				// 		viewName:sViewName,
				// 		id: "helloDialogButton",
				// 		actions: new Press(),
				// 		errorMessage: "did not find the Button"
				// 	});
				// }
			},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The App view is displayed");
						},
						errorMessage: "Did not find the App view"
					});
				},

				// theButtonShouldHaveADifferentText: function () {
				// 	return this.waitFor({
				// 		viewName:  sViewName,
				// 		id: "changingButton",
				// 		matchers: new PropertyStrictEquals({
				// 			name: "text",
				// 			value: "I got pressed"
				// 		}),
				// 		success: function (oButton) {
				// 			Opa5.assert.ok(true, "The button's text changed to: " + oButton.getText());
				// 		},
				// 		errorMessage: "did not change the Button's text"
				// 	});
				// }
			}
		}
	});

});