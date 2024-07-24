sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], function (Controller, JSONModel, History, UIComponent) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {
            var oViewModel = new JSONModel({
                greetingText: "Hello World"
            });
            this.getView().setModel(oViewModel, "viewData");

            var oEmployeeModel = new JSONModel({
                EmployeeCollection: [
                    {
                        id: "EMP001",
                        name: "John Doe",
                        department: "HR",
                        role: "Manager",
                        email: "john.doe@example.com"
                    },
                    {
                        id: "EMP002",
                        name: "Jane Smith",
                        department: "IT",
                        role: "Developer",
                        email: "jane.smith@example.com"
                    },
                    {
                        id: "EMP003",
                        name: "Michael Brown",
                        department: "Finance",
                        role: "Analyst",
                        email: "michael.brown@example.com"
                    },
                    {
                        id: "EMP004",
                        name: "Emily Davis",
                        department: "Marketing",
                        role: "Specialist",
                        email: "emily.davis@example.com"
                    },
                    {
                        id: "EMP005",
                        name: "Chris Wilson",
                        department: "Sales",
                        role: "Representative",
                        email: "chris.wilson@example.com"
                    },
                    {
                        id: "EMP006",
                        name: "Jessica Moore",
                        department: "Customer Service",
                        role: "Support Agent",
                        email: "jessica.moore@example.com"
                    },
                    {
                        id: "EMP007",
                        name: "David Taylor",
                        department: "Operations",
                        role: "Coordinator",
                        email: "david.taylor@example.com"
                    },
                    {
                        id: "EMP008",
                        name: "Sarah Martinez",
                        department: "Legal",
                        role: "Counsel",
                        email: "sarah.martinez@example.com"
                    },
                    {
                        id: "EMP009",
                        name: "Andrew Lee",
                        department: "IT",
                        role: "SysAdmin",
                        email: "andrew.lee@example.com"
                    },
                    {
                        id: "EMP010",
                        name: "Laura Harris",
                        department: "Finance",
                        role: "Accountant",
                        email: "laura.harris@example.com"
                    },
                    {
                        id: "EMP011",
                        name: "Daniel Walker",
                        department: "Marketing",
                        role: "Manager",
                        email: "daniel.walker@example.com"
                    },
                    {
                        id: "EMP012",
                        name: "Sophia Allen",
                        department: "Sales",
                        role: "Director",
                        email: "sophia.allen@example.com"
                    }
                ]
            });
            this.getView().setModel(oEmployeeModel, "employees");
        },

        onSearch: function (oEvent) {
            var sQuery = oEvent.getSource().getValue();
            var oList = this.byId("employeeList");
            var oBinding = oList.getBinding("items");
            var oFilter;

            if (sQuery && sQuery.length > 0) {
                oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, sQuery);
            }

            oBinding.filter(oFilter ? [oFilter] : []);
        },

        onDepartmentChange: function (oEvent) {
            var sSelectedKey = oEvent.getSource().getSelectedKey();
            var oList = this.byId("employeeList");
            var oBinding = oList.getBinding("items");
            var oFilter;

            if (sSelectedKey) {
                oFilter = new sap.ui.model.Filter("department", sap.ui.model.FilterOperator.EQ, sSelectedKey);
            }

            oBinding.filter(oFilter ? [oFilter] : []);
        },

        onShowDetailsPress: function (oEvent) {
            var sEmployeeId = oEvent.getSource().getCustomData()[0].getValue();
            var oDialog = this.byId("employeeDetailDialog");

            // Bind the selected employee data to the dialog
            oDialog.bindElement({
                path: "/EmployeeCollection/" + (parseInt(sEmployeeId, 10) - 1),
                model: "employees"
            });

            oDialog.open();
        },

        onCloseDialog: function () {
            var oDialog = this.byId("employeeDetailDialog");
            oDialog.close();
        }
    });
});