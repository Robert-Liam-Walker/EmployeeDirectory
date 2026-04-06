/*global QUnit*/

sap.ui.define([
	"project1/controller/View2.controller"
], function (View2Controller) {
	"use strict";

	QUnit.module("View2 Controller");

	QUnit.test("_getEmployeeIndex returns the correct employee position", function (assert) {
		var oController = new View2Controller();
		oController.getView = function () {
			return {
				getModel: function () {
					return {
						getProperty: function () {
							return [
								{ id: "EMP001" },
								{ id: "EMP002" },
								{ id: "EMP003" }
							];
						}
					};
				}
			};
		};

		assert.strictEqual(oController._getEmployeeIndex("EMP002"), 1, "Finds a matching employee");
		assert.strictEqual(oController._getEmployeeIndex("EMP999"), -1, "Returns -1 when the employee does not exist");
	});
});
