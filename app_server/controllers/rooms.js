const fs = require('fs');
const rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET rooms view */
const room = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', rooms });
};

module.exports = {
    room
};

/* routes map URL requests to the controllers. */