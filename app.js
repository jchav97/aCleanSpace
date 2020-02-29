const express = require('express');
const exphbs = require('express-handlebars');
const {MongoClient} = require('mongodb');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
	res.render('home');
});

function main(){
	const MongoClient = require('mongodb').MongoClient;
	const uri = "mongodb+srv://<username>:<password>@cluster0-9sa9c.gcp.mongodb.net/test?retryWrites=true&w=majority";
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(err => {
	const collection = client.db("test").collection("devices");
	console.log("MongoDB Connected");
	client.close();
	});
}

main();

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/howYouCanHelp', (req, res) => {
	res.render('howYouCanHelp');
});

app.get('/leaderBoards', (req, res) => {
	res.render('leaderBoards');
});

app.get('/post', (req, res) => {
	res.render('post');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
