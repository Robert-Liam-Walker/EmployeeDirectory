sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "View1";
	
	Opa5.createPageObjects({
		onTheViewPage: {

			actions: {

				iOpenTheFirstEmployee: function () {
					return this.waitFor({
						id: "employeeList",
						viewName: sViewName,
						success: function (oList) {
							oList.getItems()[0].firePress();
						},
						errorMessage: "Did not find the employee list"
					});
				}
			},

			assertions: {

				iShouldSeeThePageView: function () {
					return this.waitFor({
						id: "page",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				}
			}
		}
	});

});
