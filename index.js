const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extend: false}));

app.use(express.json())

app.get('/*pp*', ( request, respond) => {
    respond.send('good')
});

app.get('/user/:userId/:color/:school/:from-:to', ( request, respond ) => {
    let id = request.params.userId;
    console.log(request.params);
    console.log(id);
    respond.send(`User: ${request.params.userId}; Color: ${request.params.color}; School: ${request.params.school}; Time: ${request.params.from}-${request.params.to}`)
});

app.route('/route').get(( request, respond) => {
    respond.send('from a get request');

}).post(( request, resond ) => {
    let count = request.body.count;
    let color = request.body.color;

    resond.send(`from a post request : ${count} : ${color}`);
});

app.listen( port, ()=> {
    console.log(`Server is up. Listenting on port: ${port}`);;
});