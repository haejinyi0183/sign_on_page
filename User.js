const mongoose = require('mongoose');

const timeStamp = () => {
    const timeObj = JSON.stringify(new Date().toLocaleDateString())
    return timeObj;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        bcrypt: true,
        rounds: 10,
    },
    date: {type: Date, default: timeStamp }
    
});

module.exports = mongoose.model('User', userSchema.plugin(require('mongoose-bcrypt')));