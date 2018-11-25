# Burger Time!

## Overview
A simple full-stack application that implements loads of goodies: Handlebars, Nodejs, and a MySQL database written with a custom ORM. Allows users to order a custom burger, then devour the burger, with all that data stored in a database.

## Demo
[Live demo on Heroku](https://eat-da-burger-zs.herokuapp.com/)

## Cloning/Setup Guide
### Software Requirements
1. NPM/Nodejs
2. A MySQL server running in the background
3. Something to interface with the MySQL server such as:
  - A Terminal/Shell
  - MySQL Workbench
  -Any other MySQL software of choice

### Setup
1. Clone this repository onto your machine.
2. Make sure your MySQL server is running and listening on a known port
3. Open a MySQL interaction program of your choice
4. Paste the content of `schema.sql` in the program and execute the queries to create the database and tables
5. (Optional) Paste the content of `seeds.sql` in the program and execute to populate the table with some burgers
6. Alter the contents of the included files to match your machine:
  - Alter the database login credentials in the `config/connection.js` file to match the login credentials of your MySQL server
  - The server by default listens on port 8080. If you prefer a different port, change the 8080 on line 4 of `server.js` to the port of your choice
7. Open a terminal/shell, cd to the location of the freshly cloned repo, and execute an `npm install` to obtain the required packages.
8. Activate the server with `npm start` or `node server.js`
9. Open a browser and go to `http://localhost:8080`, swapping out the 8080 with a different port if you chose to change the port in step 6
