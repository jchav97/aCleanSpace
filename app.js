const express = require('express');
const exphbs = require('express-handlebars');
var favicon = require('serve-favicon');
const bodyParser = require('body-parser');
// const {MongoClient} = require('mongodb');
const app = express(bodyParser);
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));

require('./models/Story.js');
const Story = mongoose.model('story');


app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use('/static', express.static('public/images'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

mongoose.connect("mongodb+srv://hackathon:hackathon@cluster0-9sa9c.gcp.mongodb.net/test?retryWrites=true&w=majority",
 { useNewUrlParser: true,
	useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));


app.get('/', (req, res) => {

	Story.find({})
	.sort({ 'timestamp': 1 })
	.lean()
    .then(stories => {
		console.log(stories);
		stories.reverse();
      res.render('home', {
        stories:stories
      });
    });
  });
  

app.post('/stories', (req, res) => {
	const newStory = {
		title: req.body.title,
		desc: req.body.desc,
		category: req.body.category
	  }

	  new Story(newStory)
      .save()
      .then(story => {
        res.redirect('/');
	  })

	});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/howYouCanHelp', (req, res) => {
	res.render('howYouCanHelp');
});

app.get('/leaderboard', (req, res) => {
	res.render('leaderboard');
});

app.get('/post', (req, res) => {
	res.render('post');
});

app.get('/signIn', (req, res) => {
	res.render('signIn');
});




const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
