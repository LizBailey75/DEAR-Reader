const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');


const sequelize = require('./config/connection');
const { exit } = require('process');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs ({
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: 'index',
  partialsDir: __dirname + '/views/partials'
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


//If this is true, sequelize is working
sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

app.get('/', (req, res) => {
  //Serves the body of the page aka "login.handlebars" to the container //aka "index.handlebars"
  res.render('login', {layout: 'index'});
  });

  app.get('/book', (req, res) => {
    res.render('book', {layout: 'index'});
});