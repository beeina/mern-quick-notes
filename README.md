# MERN-Stack Infrastructure

Clone this repo to provide the starter code for a comprehensive MERN-Stack project including token-based authentication.


## .env set-up

create a .env file with these fileds
...
DATABASE_URL=<your mongoDB Atlas connection string>
SECRECT=<a string with no spaces to verify your JWT tokens>
...

## Starting Up the Project
- install all needed packages with `npm install`
- open up two terminal tabs
    - run expess on your backend tab with `nodemon server`
    - run the react front-end with the commnd `npmstart` on the other tab