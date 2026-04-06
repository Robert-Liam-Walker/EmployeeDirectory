# Employee Directory

Employee Directory is a small SAPUI5 application for browsing a company employee roster, filtering by department, and opening a dedicated detail view for each employee.

## Current Features

- Search employees by name, ID, role, or email
- Filter the directory by department
- Browse a sorted employee list with status, location, and manager info
- Open a routed employee detail page with contact and employment metadata
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

## Contact

For questions or feedback, contact [Liam Walker](mailto:liam.walker@example.com).

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
|**Application Title**<br>App Title|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.126.1|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## project1

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)
