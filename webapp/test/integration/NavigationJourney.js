/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/App",
	"./pages/View1",
	"./pages/View2"
], function (opaTest) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaTest("Should see the initial page of the app", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheApp();
      	Then.onTheViewPage.iShouldSeeThePageView();

		//Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("Should open an employee detail page and return to the directory", function (Given, When, Then) {
		Given.iStartMyApp();

		When.onTheViewPage.iOpenTheFirstEmployee();

		Then.onTheDetailPage.iShouldSeeEmployeeDetails();

		When.onTheDetailPage.iNavigateBackToTheDirectory();

		Then.onTheViewPage.iShouldSeeThePageView();
		Then.iTeardownMyApp();
	});
});
