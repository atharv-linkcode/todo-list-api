// This file will handle connection logic to the MongoDB databse 

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://atharv:atharv123@cluster0.sf4s0gz.mongodb.net/TaskManager?retryWrites=true&w=majority', {useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDB Succesdfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB ");
    // console.log(e);
    e;
});

// to prevent deprectation warning (from MongoDB navtive Driver)
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};