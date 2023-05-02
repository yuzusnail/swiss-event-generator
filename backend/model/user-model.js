const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// static signup method
userSchema.statics.signup = async function(InUserName, InPassword) {
    if (!InUserName || !InPassword)
        throw Error('All fields must be filled');
    
    const bUserExists = await this.findOne({ InUserName });
    if (bUserExists) 
        throw Error("Username already in use");
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(InPassword, salt);

    return await this.create({
        username: InUserName,
        password: hash
    });
}

module.exports = mongoose.model('User', userSchema);