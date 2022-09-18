const fs = require('fs');
const meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET travel view */
const meal = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways', meals});
};

module.exports = {
    meal
};

/* routes map URL requests to the controllers. */