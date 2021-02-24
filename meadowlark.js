/*
    Code copied from Web Development with Express and Node, 2nd Edition
    by Ethan Brown

    Semicolons and some comments added by me, Erik L. Meyer
*/

// Tradition, but not required, to include imports at top. -EM
const fortune = require('./lib/fortune');
const express = require('express');
const expressHandelbars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Configure Handlebars view engine
app.engine('handlebars', expressHandelbars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => {
    res.render('about', {fortune: fortune.getFortune()});
})

// Custom 404 page
app.use((req, res) => {
    res.status(404);
    res.render('404');
})

// Custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render('500');
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))
