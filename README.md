# Employee Directory

Employee Directory is a SAPUI5 application for browsing a company roster, filtering by department, and opening a dedicated detail page for each employee.

## Current Features

- Search employees by name, ID, role, or email
- Filter the directory by department
- Review top-level summary metrics for headcount, active employees, departments, and locations
- Browse a sorted employee list with status, location, and manager info
- Open a routed employee detail page with contact and employment metadata
- Includes unit tests for controller helpers and OPA coverage for the list-to-detail flow
- Responsive UI built with SAPUI5/Fiori tooling

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/Robert-Liam-Walker/EmployeeDirectory.git
cd EmployeeDirectory
```

2. Install dependencies

```bash
npm install
```

3. Run the app

```bash
npm start
```

4. Open the sandbox URL shown by the UI5 dev server, or use the no-FLP mode:

```bash
npm run start-noflp
```

## Available Scripts

- `npm start`: Launch the app in the Fiori Launchpad sandbox
- `npm run start-local`: Launch using `ui5-local.yaml`
- `npm run start-noflp`: Launch the app directly without FLP sandbox
- `npm run build`: Build the production bundle into `dist/`
- `npm run unit-tests`: Open QUnit unit tests
- `npm run int-tests`: Open OPA integration tests

## Project Notes

- Employee data currently comes from `webapp/model/employees.json`
- The app uses component-level JSON models so both the list page and detail page share the same source of truth
- `npm run build` has been verified locally
- Browser-based UI tests are included, but they still need to be exercised in a browser session

## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Wed Jul 24 2024 02:40:42 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.14.1|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>None|
|**Service URL**<br>N/A
|**Module Name**<br>project1|
|**Application Title**<br>Employee Directory|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.126.1|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## Notes

This project started from the SAP Fiori freestyle generator and has been adapted into a standalone employee directory sample.
