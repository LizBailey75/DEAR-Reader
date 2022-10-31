const { application, response } = require("express");
const {sequelize} = require("sequelize");

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 
 //Creating GET router to fetch all the book details from the mysql Database
 app.get('/book' , (req, res, next) => {
    
    let id = request.params.id;
    var query = `SELET * FROM book WHERE id = "${id}"`;
    sequelize.query(query, function(error, data) {
        response.render('book', {title: 'Edit data', action:'edit', bookData:data[0]});
 });
 });
