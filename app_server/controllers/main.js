/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways'});
};
module.exports = {
    index
};

/* The controller connects the model and the view. In this case, when the user clicks on a link to move to another page,
the controller handles the callback for the user interaction */