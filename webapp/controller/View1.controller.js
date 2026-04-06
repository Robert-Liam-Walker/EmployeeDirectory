sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/UIComponent"
], function (Controller, JSONModel, Filter, FilterOperator, UIComponent) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {
            var oEmployeesModel = this.getOwnerComponent().getModel("employees");
            var aEmployees = oEmployeesModel.getProperty("/EmployeeCollection") || [];

            this.getView().setModel(oEmployeesModel, "employees");
            this.getView().setModel(new JSONModel({
                searchValue: "",
                selectedDepartment: "",
                resultCount: aEmployees.length,
                totalCount: aEmployees.length,
                departments: this._buildDepartmentOptions(aEmployees)
            }), "view");
        },

        _buildDepartmentOptions: function (aEmployees) {
            var aDepartments = aEmployees
                .map(function (oEmployee) {
                    return oEmployee.department;
                })
                .filter(function (sDepartment, iIndex, aAllDepartments) {
                    return sDepartment && aAllDepartments.indexOf(sDepartment) === iIndex;
                })
                .sort();

            return [{
                key: "",
                text: "All Departments"
            }].concat(aDepartments.map(function (sDepartment) {
                return {
                    key: sDepartment,
                    text: sDepartment
                };
            }));
        },

        _applyFilters: function () {
            var oViewModel = this.getView().getModel("view");
            var sQuery = oViewModel.getProperty("/searchValue");
            var sDepartment = oViewModel.getProperty("/selectedDepartment");
            var aFilters = [];

            if (sQuery) {
                aFilters.push(new Filter({
                    filters: [
                        new Filter("name", FilterOperator.Contains, sQuery),
                        new Filter("id", FilterOperator.Contains, sQuery),
                        new Filter("role", FilterOperator.Contains, sQuery),
                        new Filter("email", FilterOperator.Contains, sQuery)
                    ],
                    and: false
                }));
            }

            if (sDepartment) {
                aFilters.push(new Filter("department", FilterOperator.EQ, sDepartment));
            }

            this.byId("employeeList").getBinding("items").filter(aFilters);
        },

        onSearch: function (oEvent) {
            this.getView().getModel("view").setProperty("/searchValue", oEvent.getSource().getValue());
            this._applyFilters();
        },

        onDepartmentChange: function (oEvent) {
            this.getView().getModel("view").setProperty("/selectedDepartment", oEvent.getSource().getSelectedKey());
            this._applyFilters();
        },

        onListUpdateFinished: function (oEvent) {
            var iTotal = oEvent.getParameter("total");
            this.getView().getModel("view").setProperty("/resultCount", iTotal);
        },

        onEmployeePress: function (oEvent) {
            var sEmployeeId = oEvent.getSource().getBindingContext("employees").getProperty("id");
            UIComponent.getRouterFor(this).navTo("employeeDetail", {
                employeeId: sEmployeeId
            });
        }
    });
});
