# OC_12_SportSee


# API 

## 1. General information

To start this project, you are free to use Docker or not. In this documentation, we will see several methods to launch the project easily.

## 2. Project (**without Docker**)

### 2.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2 Launching the project

- Fork the repository
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

## 3. Endpoints

### 3.1 Possible endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:3001/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3001/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3001/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3001/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 3.2 Examples of queries

- `http://localhost:3001/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:30001/user/18` - Retrieves user 18's main information.


# Frontend

### Prerequisites

- [![npm-v_7.24.1](https://img.shields.io/badge/npm-v_7.24.1-orange)](https://docs.npmjs.com/)
- [![NodeJs-v_16.10.0](https://img.shields.io/badge/NodeJs-v_16.10.0-red)](https://nodejs.org/en/docs/)

## 1 Launching the project

- Fork the repository
- Clone it on your computer.
- The `nmp install` command will allow you to install the dependencies.
- The `npm start` command will allow you to run the react app.

## 2 Endpoint

When connected to API : http://localhost:3000/?id=12
When connected to mockdata : http://localhost:3000