sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
    "use strict";

    return Controller.extend("project1.controller.View2", {
        onInit: function () {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("employeeDetail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sEmployeeId = oEvent.getParameter("arguments").employeeId;
            this.getView().bindElement({
                path: "/EmployeeCollection/" + (this._getEmployeeIndex(sEmployeeId)),
                model: "employees"
            });
        },

        _getEmployeeIndex: function (sEmployeeId) {
            var aEmployees = this.getView().getModel("employees").getProperty("/EmployeeCollection");
            for (var i = 0; i < aEmployees.length; i++) {
                if (aEmployees[i].id === sEmployeeId) {
                    return i;
                }
            }
            return -1;
        },

        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("view1", {}, true);
            }
        }
    });
});
