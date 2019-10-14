var mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://sei:${process.env.DATABASE_URL}@sei-1hogc.gcp.mongodb.net/collegebasketball?retryWrites=true&w=majority`, { useNewUrlParser: true });
// database connection:
mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;