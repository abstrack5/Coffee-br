const express  = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);

<<<<<<< HEAD
require('dotenv').config();

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

=======
const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

>>>>>>> 6dde2eb79370c9958bf62893c3f0fd83bc685f2a
app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`You're now connected to port: ${PORT}`));
});