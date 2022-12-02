const database = require('../Database/database.js');

async function check_user (email,pass){
    const result = await database.get_login();
    return 0;
}

const createApi_users = app => {

    

app.get('/nsi/api/get_users', async (request, response) => {

    try {
        const result = await database.get_users();
        response.json({ result });
    } catch (e) {
        database.add_log('error', e.message, null);
        response.json({ result: 'ERROR', message: 'Ошибка запроса. -> ' + e.message });
    }
});
}
module.exports = {
    createApi_users,
    check_user
}