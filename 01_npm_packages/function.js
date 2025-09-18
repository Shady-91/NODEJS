const axios = require('axios');

function getData() {
      return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

module.exports = getData;