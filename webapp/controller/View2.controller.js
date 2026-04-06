sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
    "use strict";

    return Controller.extend("project1.controller.View2", {
        onInit: function () {
            this.getView().setModel(this.getOwnerComponent().getModel("employees"), "employees");
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("employeeDetail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sEmployeeId = oEvent.getParameter("arguments").employeeId;
            var iEmployeeIndex = this._getEmployeeIndex(sEmployeeId);

            if (iEmployeeIndex < 0) {
                UIComponent.getRouterFor(this).navTo("RouteView1", {}, true);
                return;
            }

            this.getView().bindElement({
                path: "/EmployeeCollection/" + iEmployeeIndex,
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
                oRouter.navTo("RouteView1", {}, true);
            }
        }
    });
});
