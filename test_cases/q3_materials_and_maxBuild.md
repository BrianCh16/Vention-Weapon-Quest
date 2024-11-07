# Test Cases for Question 3

## Table of Contents
1. [Weapons API Test Cases](#weapons-api-test-cases)
2. [Materials API Test Cases](#materials-api-test-cases)

<br>
<br>
<br>

# Weapons API Test Cases

## Test Case ID: WQ_Weapons_API_01

**Test Scenario**

Verify the GET `/api/weapon/:id/maxBuildQuantity` endpoint returns 200 status code

**Prerequisites**

Database is *Migrated* and *Populated* with

- `npm run migrate`
- `npm run seed`

Ensure API Server is running with

- `npm start`

**Test Steps**

1. HTTP Method: `GET`
2. Host URL: `localhost:5000`
3. Endpoint: `/api/weapon/:id/maxBuildQuantity`
4. Request Body: `null`

**Expected Results**

- Status Code: `200`
- Response: `{ weapon: Weapon, maxBuildQty: number }`
- Description: Calculates the maximum number of times a weapon can be built

**Actual Results**

- Status Code: `200`
- Response: `{ weapon: Weapon, maxBuildQty: number }`
- Description: Calculates the maximum number of times a weapon can be built

**Test Status**

PASS ✅

## Test Case ID: WQ_Weapons_API_02

**Test Scenario**

Verify the GET `/api/weapon/:id/maxBuildQuantity` endpoint returns 404 status code when given a wrong/invalid ID

**Prerequisites**

Database is *Migrated* and *Populated* with

- `npm run migrate`
- `npm run seed`

Ensure API Server is running with

- `npm start`

**Test Steps**

1. HTTP Method: `GET`
2. Host URL: `localhost:5000`
3. Endpoint: `/api/weapon/:id/maxBuildQuantity`
4. Request Body: `null`

**Expected Results**

- Status Code: `404`
- Response: `message`: Weapon with `:id` does not exist
- Description: Fetches a wrong/invalid Weapon ID

**Actual Results**

- Status Code: `404`
- Response: `message`: Weapon with `:id` does not exist
- Description: Fetches a wrong/invalid Weapon ID

**Test Status**

PASS ✅

<br>
<br>
<br>

# Materials API Test Cases

## Test Case ID: WQ_Materials_API_01

**Test Scenario**

Verify the GET `/api/material` endpoint returns 200 status code

**Prerequisites**

Database is *Migrated* and *Populated* with

- `npm run migrate`
- `npm run seed`

Ensure API Server is running with

- `npm start`

**Test Steps**

1. HTTP Method: `GET`
2. Host URL: `localhost:5000`
3. Endpoint: `/api/material`
4. Request Body: `null`

**Expected Results**

- Status Code: `200`
- Response: `Material[]` Array of Material objects
- Description: Fetches all materials for the database

**Actual Results**

- Status Code: `200`
- Response: `Material[]` Array of Material objects
- Description: Fetches all materials for the database

**Test Status**

PASS ✅

## Test Case ID: WQ_Materials_API_02

**Test Scenario**

Verify the GET `/api/material/:id` endpoint returns 200 status code

**Prerequisites**

Database is *Migrated* and *Populated* with

- `npm run migrate`
- `npm run seed`

Ensure API Server is running with

- `npm start`

**Test Steps**

1. HTTP Method: `GET`
2. Host URL: `localhost:5000`
3. Endpoint: `/api/material/:id`
4. Request Body: `null`

**Expected Results**

- Status Code: 200
- Response: `Material` A Material Object based on ID
- Description: Fetches a specfic material based on the ID from the database

**Actual Results**

- Status Code: 200
- Response: `Material` A Material Object based on ID
- Description: Fetches a specfic material based on the ID from the database

**Test Status**

PASS ✅

## Test Case ID: WQ_Materials_API_03

**Test Scenario**

Verify the GET `/api/material/:id` endpoint returns 404 status code when given a wrong/invalid ID

**Prerequisites**

Database is *Migrated* and *Populated* with

- `npm run migrate`
- `npm run seed`

Ensure API Server is running with

- `npm start`

**Test Steps**

1. HTTP Method: `GET`
2. Host URL: `localhost:5000`
3. Endpoint: `/api/material/:id`
4. Request Body: `null`

**Expected Results**

- Status Code: `404`
- Response: `message` : Material with `:id` does not exist
- Description: Fetches a wrong/invalid Material ID

**Actual Results**

- Status Code: `404`
- Response: `message` : Material with `:id` does not exist
- Description: Fetches a wrong/invalid Material ID

**Test Status**

PASS ✅

## Test Case ID: WQ_Materials_API_04

**Test Scenario**

Verify the PUT `/api/material/:id` endpoint returns 200 status code

**Prerequisites**

Database is *Migrated* and *Populated* with

- `npm run migrate`
- `npm run seed`

Ensure API Server is running with

- `npm start`

**Test Steps**

1. HTTP Method: `PUT`
2. Host URL: `localhost:5000`
3. Endpoint: `/api/material/:id`
4. Request Body: `{ power_level: int, qty: int }` application/json

**Expected Results**

- Status Code: `200`
- Response: `{ updatedMaterials: Material[], updatedWeapons: Weapon[] }`
- Description: Updates the power level and quantity of a material, then recalculates the power level of affected weapon

**Actual Results**

- Status Code: `200`
- Response: `{ updatedMaterials: Material[], updatedWeapons: Weapon[] }`
- Description: Updates the power level and quantity of a material, then recalculates the power level of affected weapon


**Test Status**

PASS ✅

## Test Case ID: WQ_Materials_API_05

**Test Scenario**

Verify the PUT `/api/material/:id` endpoint returns 404 status code when given a wrong/invalid ID

**Prerequisites**

Database is *Migrated* and *Populated* with

- `npm run migrate`
- `npm run seed`

Ensure API Server is running with

- `npm start`

**Test Steps**

1. HTTP Method: `PUT`
2. Host URL: `localhost:5000`
3. Endpoint: `/api/material/:id`
4. Request Body: `{ power_level: int, qty: int }` application/json

**Expected Results**

- Status Code: `404`
- Response: `message` : Material with `:id` does not exist
- Description: Updates a wrong/invalid Material ID

**Actual Results**

- Status Code: `404`
- Response: `message` : Material with `:id` does not exist
- Description: Updates a wrong/invalid Material ID


**Test Status**

PASS ✅

## Test Case ID: WQ_Materials_API_06

**Test Scenario**

Verify the PUT `/api/material/:id` endpoint returns 500 status code when given the wrong payload/body

**Prerequisites**

Database is *Migrated* and *Populated* with

- `npm run migrate`
- `npm run seed`

Ensure API Server is running with

- `npm start`

**Test Steps**

1. HTTP Method: `PUT`
2. Host URL: `localhost:5000`
3. Endpoint: `/api/material/:id`
4. Request Body: `{ INVALID}` application/json

**Expected Results**

- Status Code: `500`
- Response: `message` : Unexpected error in Material.update
- Description: Updates a Material with a wrong/invalid payload

**Actual Results**

- Status Code: `500`
- Response: `message` : Unexpected error in Material.update
- Description: Updates a Material with a wrong/invalid payload

**Test Status**

PASS ✅

## Test Case ID: WQ_Materials_API_07

**Test Scenario**

Verify the DELETE `/api/material/:id` endpoint returns 200 status code

**Prerequisites**

Database is *Migrated* and *Populated* with

- `npm run migrate`
- `npm run seed`

Ensure API Server is running with

- `npm start`

**Test Steps**

1. HTTP Method: `DELETE`
2. Host URL: `localhost:5000`
3. Endpoint: `/api/material/:id`
4. Request Body: `null`

**Expected Results**

- Status Code: `200`
- Response: `{ deletedMaterials: Material[], brokenWeapons: Weapon[] }`
- Description: Sets the `deleted_at` field of specific Material object and all its parent Materials to the current `datetime`. Also sets the `status` of all affected Weapon Objects as `broken`

**Actual Results**

- Status Code: `200`
- Response: `{ deletedMaterials: Material[], brokenWeapons: Weapon[] }`
- Description: Sets the `deleted_at` field of specific Material object and all its parent Materials to the current `datetime`. Also sets the `status` of all affected Weapon Objects as `broken`

**Test Status**

PASS ✅

## Test Case ID: WQ_Materials_API_08

**Test Scenario**

Verify the DELETE `/api/material/:id` endpoint returns 404 status code when given a wrong/invalid ID

**Prerequisites**

Database is *Migrated* and *Populated* with

- `npm run migrate`
- `npm run seed`

Ensure API Server is running with

- `npm start`

**Test Steps**

1. HTTP Method: `DELETE`
2. Host URL: `localhost:5000`
3. Endpoint: `/api/material/:id`
4. Request Body: `null`

**Expected Results**

- Status Code: `404`
- Response: `message` : Material with `:id` does not exist
- Description: Updates a wrong/invalid Material ID

**Actual Results**

- Status Code: `404`
- Response: `message` : Material with `:id` does not exist
- Description: Updates a wrong/invalid Material ID


**Test Status**

PASS ✅

[Back to Top](#test-cases-for-question-3)