const mongoose = require('mongoose');

const connectToDataBase = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce-june23')    
    }
    catch (e) {
        await mongoose.disconnect();
        console.log('DB Connection Failed!');
    }
}

module.exports = {
    connectToDataBase
}