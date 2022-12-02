const database = require('../Database/database.js');

const test_api = app =>{
    database.set_test(3,'test');
}

module.exports = {
    test_api
}