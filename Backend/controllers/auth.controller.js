const User = require("../models/User");


const login = async  (req, res) => {
    const {email, password} = req.body;
     console.log({email, password})
    try{
        const user = await User.findOne({
            where: {
                email,
                password
            }
        })
        if(!user){
            res.status(403).json({
                msg: "Email/password are incorrect",
                login: false,
                user: null
            })
        }
        else{
            res.status(200).json({
                msg: "Logged in",
                login: true,
                user
            })
        }

    } catch(error){
        res.status(403).json({
            msg: "Email/password are incorrect",
            login: false,
            user: null
        })
    }
}

module.exports = {
    login
}