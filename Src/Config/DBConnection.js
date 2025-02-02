require('dotenv').config();
const mongoose = require('mongoose');

module.exports.connect = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch(error => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    });
};
