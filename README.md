# tfb-kjmp-backend

# Queer Black Travel Guide ::

## Project overview

An app created to inform and inspire Black queer travellers to see the world safely and connect with their people. 
Allows users to input user data from a postgres database using an RESTful API built in Express.

## The team

- [Ephie](https://github.com/ephieo) - Design / Developer 💅 
- [Josh](https://github.com/jhart5) - Quality assurance / Developer 👾
- [Terrence](https://github.com/netceer) -  DevOps / Developer 🧳
- [Trish](https://github.com/trishtracking) - Scrum facilitator / Developer 🦺

## Contents
- [Project overview](#Project-overview)
- [🕶The team](#🕶-The-team)
- [Tech Stack](#Tech-Stack)
- [🗄️ Database schema](#🗄️-Database-schema)
- [🧞‍Features](#🧞‍-Features)
- [🏁 Getting started](#🏁-Getting-started)
	- [Database setup](#Database-setup)
	- [REST API Endpoints](#REST-API-Endpoints)
- [📆 Project Timeline](#📆-Project-Timeline)
- [Reflections and What Next](#Reflections-and-what-next)
- [Key takeaways](#Key-takeaways)
- [⏳ Additional Features](#Additional-Features)

## Tech Stack


#### Dependencies
- pg - non-blocking postgres client for Node (API)
- dotenv - allows private variables to be added (API)
- nodemon - restarts the server automatically when you make any change to the code
- cors - provides a Connect/Express middleware that can be used to enable CORS with various options
- Prettier - ensures we all have same formatting as a team
- Supertest - a library made specifically for testing nodejs http servers
- Tape - an assertion library used in setting up testing structure 
- Tap-spec - 


#### Dev Dependencies

- Husky - Prevents poor code from being committed automatically

## 🗄️ Database schema

![database-schema]()

## Features

- You can see information from all countries 
- etc etc 



## 🏁 Getting started
1. Clone this repo locally
2. Run `npm run i` to install dependencies 

### Database setup

3. Enter postgres and set up a superuser for the local database

```
CREATE USER myuser WITH PASSWORD 'mypassword';
ALTER USER myuser WITH SUPERUSER;
```

4. Set up local dev and testing database.

```
   CREATE DATABASE my_new_db WITH OWNER myuser;
   \c my_new_db;
   \i .../db/init.sql;


etc.. 



---



### REST API Endpoints

Insomnia?? 

### GET


- GET all customers: `http://localhost:8080/customers/`
- GET all customer coordinates:`http://localhost:8080/customers/coords`
- GET specific customer:`http://localhost:8080/customers/id:`
- GET all vendors: `http://localhost:8080/vendors/`
- GET all vendor coordinates: `http://localhost:8080/vendors/coords`
- GET specific vendor:`http://localhost:8080/vendors/id:`
- GET specific route by name:`http://localhost:8080/routes/:name:`

### POST

### Admin etc. 


---

## 📆 Project Timeline
### 🎨 Week 1: Design 


For an overview of the project's user stories, check out the [User stories]() here

The initial prototype can be viewed here on [Figma]()

![figma prototype]()


Through our initial user research, we learnt ...


### 🔧 Week 2: First Build Sprint



### 🔨 Week 3: Second Build Sprint



## Reflections and what next
### 👨‍🏫 Key takeaways


### ⏳ Additional Features
