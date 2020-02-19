<p align="center">
  <img src="https://github.com/mleitejunior/doe/blob/master/public/logo.png" title="DOE logo" alt="DOE LOGO">
</p>

<p align="center">Server and Website build at MaratonaDev free course (17/feb to 19/feb 2020)<br>
Express Node.js / Html / Css / PostgreSQL</p>

## Install and run

To copy this project to your machine, you need to:

- Install [Git](https://git-scm.com/downloads) 
- Clone the repository running the command:

```
Git clone https://github.com/mleitejunior/doe
```

- Install the dependencies using [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/), at your project folder, run the command:

```
npm install
```
  or
```
yarn install
```

- Install [PostgreSQL](https://www.postgresql.org/) and run at your machine with this configuration:

```
user: postgres
password: docker
host: localhost
port: 5432
database: doe
```
*If you want to use another variables, change then at ```server.js``` line 13

- Create a table named `donors` and add three columns `name`, `email` and `blood`, all of them text type and not null.
- With PosgreSQL running, start the server with ```npm start``` or ```yarn start```, browse the adress ```localhost:3000``` at your web browser, enjoy! 

## Using the website

- Add a new donor at QUERO AJUDAR form, press ENVIAR and refresh your PostgreSQL database.

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Nunjucks](https://mozilla.github.io/nunjucks/) - Template engine for JS
* [PostgreSQL](https://www.postgresql.org/) - Relational Database

## Authors

* **Marcelo Leite Junior** - *Student, code owner* - [mleitejunior's Github](https://github.com/mleitejunior)
* **Mayk Brito** - *Instructor* - [Maykbrito's Github](https://github.com/maykbrito)
* **Rocketseat** - *Education and Tecnology Platform* - [Rocketseat's Github](https://github.com/Rocketseat)
