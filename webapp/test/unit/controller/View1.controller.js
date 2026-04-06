/*global QUnit*/

sap.ui.define([
	"project1/controller/View1.controller"
], function (View1Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("_buildDepartmentOptions creates a sorted unique department list", function (assert) {
		var oController = new View1Controller();
		var aOptions = oController._buildDepartmentOptions([
			{ department: "IT" },
			{ department: "Finance" },
			{ department: "IT" },
			{ department: "HR" }
		]);

		assert.strictEqual(aOptions[0].key, "", "Includes the default option first");
		assert.deepEqual(aOptions.slice(1), [
			{ key: "Finance", text: "Finance" },
			{ key: "HR", text: "HR" },
			{ key: "IT", text: "IT" }
		], "Returns unique department options in ascending order");
	});

	QUnit.test("_buildSummary returns aggregate employee metrics", function (assert) {
		var oController = new View1Controller();
		var oSummary = oController._buildSummary([
			{ department: "Finance", status: "Active", location: "Chicago, IL" },
			{ department: "IT", status: "On Leave", location: "Austin, TX" },
			{ department: "Finance", status: "Active", location: "Chicago, IL" }
		]);

		assert.deepEqual(oSummary, {
			activeCount: 2,
			departmentCount: 2,
			locationCount: 2
		}, "Calculates employee summary totals");
	});
});
