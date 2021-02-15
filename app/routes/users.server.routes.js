var users = require('../../app/controllers/users.server.controller');

module.exports = function (app) {
    app.route('/display')
        .get(users.display);

    app.route('/users')
        .post(users.create)
        .get(users.list);
        
    app.route('/users/:userId')
    .get(users.read)
    .put(users.update);
    
    app.param('userId', users.userByID);

    app.route('/read_user').post(users.userByUsername);
    app.route('/delete_user').get(users.showDeletePage);
    //
    app.route('/delete').delete(users.deleteByUserName);
};
