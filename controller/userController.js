const User = require('../model/User');
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).json({
                message: "User already exists",
            });
        }

        const hashPassword = bcrypt.hashSync(password);
        const user = new User({ email, username, password: hashPassword });
        await user.save();
        res.status(201).json({
            user: user,
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            message: "Something went wrong",
        })
    }
}

const signIn = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (!existingUser) {
            res.status(200).json({
                message: "Please SignIn First",

            });
        }
        const isPassCorrect = bcrypt.compareSync(req.body.password, existingUser.password);
        if (!isPassCorrect) {

            return res.status(200).json({
                message: 'Password is incorrect',
            })
        }

        const { password, ...others } = existingUser._doc;
        res.status(200).json(others);


    } catch (error) {
        res.status(500).json({
            message: "soething went wrong", 
            error : error 
        })
    }
}


module.exports = {
    register: registerUser,
    signIn: signIn
}