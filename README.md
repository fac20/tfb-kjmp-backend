# tfb-kjmp-backend

#  🖤🏳️‍🌈Queer Black Travel Guide 🖤 🏳️‍🌈

## Project overview

An app created to inform and inspire Black queer travellers to see the world safely and connect with their people. 
Allows users to input user data from a postgres database using an RESTful API built in Express, and also features data input by our Product Owner via an Airtable database. 

## The team

- [Ephie](https://github.com/ephieo) - Design / Developer 💅 
- [Josh](https://github.com/jhart5) - Quality assurance / Developer 👾
- [Terrence](https://github.com/netceer) -  DevOps / Developer 🧳
- [Trish](https://github.com/trishtracking) - Scrum facilitator / Developer 🦺

## Contents

- [Tech Stack](#Tech-Stack)
- [🗄️ Database schema](#🗄️-Database-schema)
- [🧞‍Features](#🧞‍-Features)
- [🔧 Install](#🔧-Install)
	- [Database setup](#Database-setup)
	- [REST API Endpoints](#REST-API-Endpoints)
- [🕐Project Timeline](#🕐-Project-Timeline)
	- [Week 1 - Design](#🎨 Week-1:-Design)
	- [Week 2 - First Build Sprint](#🔧 Week-2:-First-Build-Sprint)
<!-- - [Reflections and What Next](#Reflections-and-what-next)
- [Key takeaways](#Key-takeaways)
- [ Additional Features](#Additional-Features) --> 

## Tech Stack

- PostgreSQL 
- Express
- Airtable
- CircleCI
- CodeCov 

#### Dependencies

- cors - provides a Connect/Express middleware that can be used to enable CORS with various options
- dotenv - allows private variables to be added (API)
- nodemon - restarts the server automatically when you make any change to the code
- pg - non-blocking postgres client for Node (API)
- Prettier - ensures we all have same formatting as a team
- Supertest - a library made specifically for testing nodejs http servers
- Tape - an assertion library used in setting up testing structure 
- Tap-spec - formats tap output 


#### Dev Dependencies

- Husky - Prevents poor code from being committed automatically


<!---## 🗄️ Database schema

<!---![]()-->

## 🧞‍Features

- Users can see approved posts of other people's experiences, things to do, businesses and laws in each country 
- Users can post their own experiences, things to do and business listings for each country
- An admin can view unapproved posts and approve them for viewing by users 


## 🔧 Install
1. Clone this repo locally
2. Run `npm run i` to install dependencies 

### Database setup

3. Enter postgres by typing `psql` into your terminal and set up a superuser for the local database by running the following: 

```
CREATE USER myuser WITH PASSWORD 'mypassword';
```

4. Set up local dev/testing database

```
   CREATE DATABASE my_new_db WITH OWNER myuser;
   \connect database_name;
   \include .../database/init.sql;

```
5. Add the local database info to a .env in the root of the project

```
TEST_DATABASE_URL = "postgres://myuser:mypassword@localhost:5432/database_name"

``` 

---



## REST API Endpoints


- `:table` retrieves entries from the Experiences, Thing to Do or Businesses tables in the database 
- `:id` retrieves a country from the world (1-197) 

### PUBLIC GET ROUTES 

- GET all countries: `http://localhost:3000/countries`
- GET a specific type of listing about a specific country :`http://localhost:3000/countries/:id/:table`

### PUBLIC POST ROUTES

- POST an experience of visiting a country : `http://localhost:3000/countries/:id/experiences`
- POST a thing to do listing to a country : `http://localhost:3000/countries/:id/things_to_do`
- POST a business listing to a country : `http://localhost:3000/countries/:id/businesses`

### ADMIN ROUTES

- GET all unapproved posts to review for approval : `http://localhost:3000/admin/:table/:postId`
- PUT approval on a post : `http://localhost:3000/admin/:table/:postId`
- DELETE a post : `admin/:table/:postId` 


---

## 🕐 Project Timeline
### 🎨 Week 1: Design 


Here's an overview of our user stories - 

- **As a Black queer person who likes travelling, I want to access useful and specific travel information so that I can travel safely**
- As a local or an experienced traveller, I want to enter text so that I can recommend places to other Black queer people
- As a mobile user, I want to quickly and easily navigate the webpage so that I can access info without having to use a laptop
- As a user with poor internet access, I want to access a page without worrying about how much data is being used so that I can see all necessary information
- As a Black queer person who owns a business, I want to contact the admin so that I can promote my business
- As a queer person soon to be married, I want to find country specific same-sex marriage laws so that I can plan my wedding abroad
- As a user visiting a poorly rated country, I want to immediately see relevant warnings so that I can plan my trip accordingly
- As a queer user, I need a way to quickly navigate away from the site so that I can keep myself safe
- As a disabled user I want to filter out inaccessible destinations so that I can plan my trip with my mobility in mind

The initial prototype can be viewed here on [Figma](https://www.figma.com/file/rfGNIT7uPwIyXhqLsuc68p/Untitled?node-id=0%3A1)

From our initial user research, we learnt that we needed to make our navigation clearer, and that people wanted to be able to add businesses as well as their own things to do in a country, alongside the original experiences posts. Also, we needed to make it more colourful! 




### 🔧 Week 2: First Build Sprint

**Monday** 

- Set up database models, handlers and routes
- Mobbed on database design
- Started on Airtable 
- Testing

**Tuesday** 

- Continued with our endpoints
- Continued with models 
- Continued with handlers, routes 
- More tests! 


**Wednesday** 

- Finished off endpoints 
- CircleCI & Codecov
- Finished Airtable

**Thursday**

- Had a code review and implemented some fixes
- Had a Project Owner review and implemented some changes 
- Finished off Codecov 

Velocity for this week can be viewed on [Notion](https://www.notion.so/3bd0bf72c4794df4b38cf0b278b7fe9f?v=62553abf3d594eca8a13bfcca8f5a804)





<!-- /* // ### 🔨 Week 3: Second Build Sprint



<!--//## Reflections and what next
<!--//### 👨‍🏫 Key takeaways


<!--//### ⏳ Additional Features */
