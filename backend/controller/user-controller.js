const User = require('../model/user-model')

// Log in User
const loginUser = async(req, res) => {
    res.json({msg: "login user"});
}

// Sign up User
const signupUser = async(req, res) => {
    const {username, password} = req.body;
    
    try {
        const user = await User.signup(username, password)
        res.status(200).json({username, password})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {loginUser, signupUser};