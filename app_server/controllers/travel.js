/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways'});
};

module.exports = {
    travel
};

/* routes map URL requests to the controllers. */