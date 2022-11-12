# Only Lonely for measuring how lonely you feel.


## Introduction

After Covid-19, many people don't go out much and live alone. As a result, more and more people are feeling lonely. This app is an app that allows you to check how lonely you feel.

### Feature

You can measure your loneliness using ucla loneliness scale version 3.
https://peplau.psych.ucla.edu/loneliness/


### Getting Started

install postgresql


## Set up

By running the following command, you can install dependencies.
```
npm install
```
Next, create a postgresql database.
```
psql
CREATE DATABASE <db_name>
```

After creating database, run the following command to create tables.
```
npm run migrate:latest

```
To start the server, run the following command
```
npm start
```
For creating the frontend, move to frontend folder, then install dependencies by following command.
```
cd frontend
npm install
```

## Set up knexfile

You need to make env.local file for configurations. Inside env.local file, please write the following variables:
```
DB_USER=<your_db_username>
DB_NAME=<your_db_name>
DB_PASSWORD=<your_db_password>
NODE_ENV=development
```



