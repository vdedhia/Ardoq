# Initial Set-up

## Install Node.js

`https://nodejs.org/en`

## Check Node & npm version

1. `node --version`
2. `npm --version`

## Install Test cafe framework

1. Go to the `Tests` folder of the repo
2. `npm install -g testcafe`

## Read more about Test cafe

1. `https://testcafe.io/`
2. `https://testcafe.io/documentation/402635/guides/overview/getting-started`

## Build the package by running the following command in `Tests` folder

(You might need to install yarn)

- `yarn` [One time activity]

# To Run the tests locally

## To Run all the tests run following command

- `testcafe chrome` --> To run all tests in Chrome
- `testcafe` --> To run all tests in Headless mode

## Run specific test by following command

- `testcafe chrome .\Tests\Scenarios\Ardoq.tests.ts` --> To run all tests from specific file in Chrome
- `testcafe .\Tests\Scenarios\Ardoq.tests.ts` --> To run all tests from specific file in Headless mode
