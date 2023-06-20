# NumbersAPI Automation
Welcome to the NumbersAPI automation repository!

# Table of Content
- [Tooling](#tooling)
- [Requirements](#requirements)
- [Reporting](#reporting)
- [Configuration](#configuration)
- [Quick Start](#quick-start)
- [Run via Docker Compose](#run-via-docker-compose)
- [Run via Docker](#run-via-docker)
- [Run on GitHub Actions](#run-via-github-actions)

## Tooling
1. Test automation framework -> [Jest](https://jestjs.io/docs/getting-started)
2. Conventional commits -> [Commitizen](https://www.npmjs.com/package/commitizen)
3. Package Manager -> [Yarn](https://yarnpkg.com/)

## Requirements
- node >= v18.16.0
- Docker >= 24.0.2 (build cb74dfc) (Optional)
- Docker-compose >= 2.18.1 (Optional)

## Reporting
Reports generate automatically by the following path `~projectRoot/report/`.
Here you can find:
- `report/report.html` (simple html report generated after test run)

## Configuration
Automation framework configuration file can be found here:
`jest.config.cjs`

_For more info visit: [Jest configuration](https://jestjs.io/docs/configuration)_

# Quick Start
:warning: Make sure you have [nodejs](https://nodejs.org/en/download) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed globally

1. Clone repo:
```
git clone https://github.com/lyuskod/numbers-api.git
```
2. Open repo:
```
cd numbers-api
```
3. Install dependencies:
```
yarn install
```
4. Create `.env` file based on `env.example` file:
```
cp env.example .env
```
5. Provide your own values for the keys inside `.env` file
(Values are already provided)
6. Run e2e tests:
```
yarn test
```

## Run via Docker Compose
1. Run the following command from the project root directory:
```
docker-compose up
```
After container will have finished it work you will have _docker_ folder created inside the project root directory.
This folder will contain the _report.html_ file with tests results

## Run via Docker
1. Create an image via following command:
```
docker build -t numbers-image .
```
2. Create and run container:
```
docker run --name numbers-container numbers-image
```

## Run via GitHub Actions
GitHub Actions with uploading test artifacts functionality is already configured for this repository. See [here](https://github.com/lyuskod/numbers-api/actions).

Pipeline details: 
- `.github/workflows/tests.yml` (GitHub Actions Pipeline)