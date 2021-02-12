/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";
	
	
	//"SA/splitapp/test/integration/AllJourneys"
	
	sap.ui.require(["SA/splitapp/test/integration/AllJourneys"
], function () {
		QUnit.start();
	});
});


