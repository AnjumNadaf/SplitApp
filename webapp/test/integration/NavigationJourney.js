// /*global QUnit*/

// sap.ui.define([
// 	"sap/ui/test/opaQunit",
// 	"./pages/login"
// ], function (opaTest) {
// 	"use strict";

// 	// QUnit.module("Navigation Journey");

// 	// opaTest("Should see the initial page of the app", function (Given, When, Then) {
// 	// 	// Arrangements
// 	// 	Given.iStartMyApp();

// 	// 	// Assertions
// 	// 	Then.onTheAppPage.iShouldSeeTheApp();

// 	// 	//Cleanup
// 	// 	Then.iTeardownMyApp();
// 	// });
// 	// opaTest("Should see th button ", function (Given, When, Then) {
// 	// 	// initialize the mock server
// 	// 	// mockserver.init();

// 	// 	// Arrangements
// 	// 	Given.iStartMyUIComponent({
// 	// 		componentConfig: {
// 	// 			name: "SA.splitapp"
// 	// 		}
// 	// 	});

// 	// 	//Actions
// 	// 	When.onTheAppPage.iPressTheSayHelloWithDialogButton();

// 	// 	// Assertions
// 	// 	Then.onTheAppPage.iShouldSeeTheHelloDialog();

// 	// 	// Cleanup
// 	// 	Then.iTeardownMyApp();




// 	QUnit.module("Navigation");

// 	opaTest("Should see the initial page of the app", function (Given, When, Then) {
// 		// Arrangements
// 		Given.iStartMyApp();

// 		// Assertions
// 		Then.onTheAppPage.iShouldSeeTheApp();

// 		//Cleanup
// 		Then.iTeardownMyApp();
// 	});
	
// 	opaTest("Should able to see the Button in view", function(Given,   When,  Then){
// 			Given.iStartMyApp();
			
			
// 			When.onTheAppPage.iPressOnTheButton();
			 
			 
// 			Then.onTheAppPage.theButtonShouldHaveADifferentText();

// 			Then.iTeardownMyApp();
// 	});

// 	opaTest("Should find a Button with a matching property", function(Given, When, Then) {
 
// 		// Act
// 		// Given.iStartMyAppInAFrame("applicationUnderTest/index.html");
// 		Given.iStartMyApp();

// 		When.waitFor({
// 			viewName : "SA.splitapp.view.login",
// 			controlType : "sap.m.Button",
// 			matchers : new PropertyStrictEquals({name : "text", value : "Changed text"}),
// 			success : function (aButtons) {
// 				Opa5.assert.ok(true, "Found the button: " + aButtons[0]);
// 			},
// 			errorMessage : "Did not find the button with the property Text equal to Changed text"
// 		});

// 		Then.waitFor({
// 			id: new RegExp("changingButton"),
// 			success : function (aButtons) {
// 				Opa5.assert.ok(true, "Found the button: " + aButtons[0]);
// 			},
// 			errorMessage : "Did not find the button with corresponding ID"
// 		});


// 		// Then.iTeardownMyAppFrame();
// 		Then.iTeardownMyApp();
// 	});






// 	});





		/*global QUnit*/

		sap.ui.define([
			"sap/ui/test/opaQunit",
			"./pages/login"
		], function (opaTest) {
			"use strict";
	
			QUnit.module("Navigation ");
	
			opaTest("Should see the initial page of the app", function (Given, When, Then) {
				// Arrangements
				Given.iStartMyApp();
	
				// Assertions
				Then.onTheAppPage.iShouldSeeTheApp();
	
				//Cleanup
				Then.iTeardownMyApp();
			});
			
			// opaTest("Should able to see the Button in view", function(Given,   When,  Then){
			// 		Given.iStartMyApp();
					
					
			// 		When.onTheAppPage.iPressOnTheButton();
					 
					 
			// 		Then.onTheAppPage.theButtonShouldHaveADifferentText();
	
			// 		Then.iTeardownMyApp();
			// });
			
		});
