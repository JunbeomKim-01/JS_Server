
const passport = require('passport');
const Strategy = require('passport-kakao').Strategy;

const User = require('../model/user.js');

module.exports = () => {
    passport.use(new Strategy({
        clientID: process.env.KAKAO_ID,//process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback',
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await User.findOne({
                where: { id: profile.id }
            });

            if (user)
                done(null, user);
            else {
                const newUser = await User.create({
                    id: profile.id,
                    name: profile.username,
                    description: profile._json.properties.profile_image
                });

                done(null, newUser);
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }));
};
