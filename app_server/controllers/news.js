/* GET news view */
const news = (req, res) => {
    pageTitle = "Travlr Getaways - News";
    res.render('news', { title: pageTitle });
};

module.exports = {
    news
};

/* routes map URL requests to the controllers. */