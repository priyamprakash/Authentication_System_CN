const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://priyamprakash99:E85XvBGlamDcmdii@cluster0.b08uskt.mongodb.net/?retryWrites=true&w=majority');

// mongoose.connect('mongodb://127.0.0.1/authentication_system_development');

//accuire the connectiontion
const db = mongoose.connection;


//error
db.on('error', console.error.bind(console, 'error in connecting to db'));

//up and runnning
db.once('open', function() {
    console.log("successfully connected to the databasef");
});