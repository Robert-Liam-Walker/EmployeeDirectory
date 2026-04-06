sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";

	var sViewName = "View2";

	Opa5.createPageObjects({
		onTheDetailPage: {

			actions: {

				iNavigateBackToTheDirectory: function () {
					return this.waitFor({
						id: "detailPage-navButton",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "Did not find the detail page navigation button"
					});
				}
			},

			assertions: {

				iShouldSeeEmployeeDetails: function () {
					return this.waitFor({
						id: "detailPage",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The employee detail page is displayed");
						},
						errorMessage: "Did not find the employee detail page"
					});
				}
			}
		}
	});
});
