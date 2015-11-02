module.exports = function (app) {
    app.get('/', function (req, res) {
        //req.session.valid = true;
        res.sendFile(__dirname + '/static/dist/home.html');
    });

}
