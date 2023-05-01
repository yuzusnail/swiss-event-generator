const User = require('../model/user-model')
const jwt = require('jsonwebtoken')

const createToken = (InId) => {
    return jwt.sign({_id : InId}, process.env.SECRET, { expiresIn: '1d' })
}

// Log in User
const loginUser = async(req, res) => {
    res.json({msg: "login user"});
}

// Sign up User
const signupUser = async(req, res) => {
    const {username, password} = req.body;
    
    try {
        const user = await User.signup(username, password)
        const token = createToken(user._id);
        
        res.status(200).json({username, token})
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {loginUser, signupUser};