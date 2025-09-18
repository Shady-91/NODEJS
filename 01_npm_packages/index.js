//initialize the project with npm init -y



//create a file index.js in the project's root folder


//add a console.log statement in index.js

console.log('Hello, World!');
//install the dependencies with npm install (npm i axios)
console.log('Sono un figo');
//import axios inside your script
const getData = require('./function');
//make a GET request using axios

getData()
      .then(response => {
            console.log(response.data);
      })
      .catch(error => {
            console.error(error);
      });

