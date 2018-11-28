module.exports = {
    google: {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    },
    mongodb: {
         dbURI: process.env.MONGODBURI
    },
    session: {
        cookieKey: process.env.COOKIEKEY
    }
 }