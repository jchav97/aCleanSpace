const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
	res.render('home');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/events', (req, res) => {
	res.render('events');
});

app.get('/gallery', (req, res) => {
	res.render('gallery');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

