# BOLTTECH-TEST

## TODO

### BACKEND

- [x] user registration
- [ ] user authentication
  - [ ] basic login
    - [ ] create a jwt for session
  - [ ] logout
    - [ ] (refresh token?)
- [x] CRUD of projects
  - [x] add
  - [x] show
  - [x] edit
  - [x] remove
- [x] CRUD of tasks [that are related to the project]
  - [x] add
  - [x] show
  - [x] edit
  - [x] remove

### BACKEND (optional)

- [ ] doublecheck business rules in the api layer
- [ ] create catches
- [ ] input validator as a middleware
- [ ] jest unit tests
- [ ] use jsdocs for function documentation
- [ ] implement PostgreSQL for relationships between users, projects and tasks
- [ ] docker *maybe laybe do beibe la diroleibe*

### REQUIREMENTS (miscellaneous, but not less important)

- [x] one user may have several projects
- [x] one user can access his projects only
- [x] one project may have several tasks
- [x] TASK FIELDS: ``{description: string; creation-date: string; finish-date: string;}``
- [x] tasks also may be ``finished or unfinished`` (boolean?)

### FRONTEND

- [ ] web app skeleton
- [ ] implement mock screen
- [ ] configure axios
- [ ] remove mocks and fetch data from the backend
- [ ] task's finish date visible in the tooltip, and a status identifier (todo, doing, done(?)) => Microsoft TODO for inspiration
- [ ] tasks added or deleted should not refresh the full page, that is bad for the user
- [ ] add gulp.js for build

### BOTH

- [ ] threat exceptions in both ends
- [ ] finished tasks should not be able to edit, nor remove (but am I able to **undone**?)
- [ ] encode user's password and authentication ([like this](https://cloud.google.com/blog/products/identity-security/account-authentication-and-password-management-best-practices))

## USEFULL COMMANDS

docker mongo-container: ``docker run -d --name mongodb-container -p 27017:27017 -e admin=admin -e 1234=1234 mongo``

## REFERENCES

- [example of node express app](https://github.com/gothinkster/node-express-realworld-example-app)
