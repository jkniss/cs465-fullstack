const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new LocalStrategy({
    usernameField: 'email'
},
(username, password, done) => {
    User.findOne({ email:username }, (err, user) => {
        if (!user) {
            return done (null, false, {
                message: 'Incorrect username.'
            });
        }
        return done(null, user);
    });
}
));