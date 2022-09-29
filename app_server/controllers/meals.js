const fs = require('fs');
const meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meal view */
const meal = (req, res) => {
    pageTitle = "Travlr Getaways - Meals";
    res.render('meals', { title: pageTitle, meals});
};

module.exports = {
    meal
};

/* routes map URL requests to the controllers. */