var mongoose = require('mongoose');



// Uncomment the mongoose stuff once the database is
// the cloud

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

// database connection:
// mongoose.connection.on('connected', function () {
//     console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
// });

module.exports = mongoose;