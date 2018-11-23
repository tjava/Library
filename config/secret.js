module.exports = {

    database: 'mongodb://chatcatuser:Lovers12@ds163162.mlab.com:63162/mychatcatdb',
    port: 8080,
    secretKey: 'cmos',
    facebook: {
      clientID: '659064084487739',
      clientSecret: '8f6064435c4ffb538fccf8bfe95317a8',
      profileFields: ['emails', 'displayName'],
      callbackURL: 'http://localhost:8080/auth/facebook/callback',
      passReqToCallback: true
    }
  
  }
  