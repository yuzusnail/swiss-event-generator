const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
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
    
    const bUserExists = await this.findOne({ username: InUserName });
    if (bUserExists) 
        throw Error("Username already in use");
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(InPassword, salt);

    const user = await this.create({
        username: InUserName,
        password: hash
    });
    
    return user;
}

// static login method
userSchema.statics.login = async function(InUserName, InPassword) {
    if (!InUserName || !InPassword)
        throw Error('All fields must be filled')
    
    const user = await this.findOne({ username: InUserName});
    if (!user)
        throw Error('No such user')
    
    const bMatch = await bcrypt.compare(InPassword, user.password)
    if (!bMatch)
        throw Error('Incorrect password')
    
    return user;
}

module.exports = mongoose.model('User', userSchema);