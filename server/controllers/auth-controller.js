const auth = require('../auth');
const knex = require("../utils/knex").instance();
// const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

getLoggedIn = async (req, res) => {
    try {
        let userId = auth.verifyUser(req);
        if (!userId) {
            return res.status(200).json({
                loggedIn: false,
                user: null,
                errorMessage: "Guest"
            })
        }

        // const loggedInUser = await User.findOne({ _id: userId });
        const loggedInUser = await knex('users').where({ id: userId });
        console.log(loggedInUser);

        return res.status(200).json({
            loggedIn: true,
            user: {
                first: loggedInUser.first,
                last: loggedInUser.last,
                email: loggedInUser.email
            }
        })
    } catch (err) {
        console.log("err: " + err);
        res.json(false);
    }
}

loginUser = async (req, res) => {
    console.log("loginUser");
    try {
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) {
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });
        }

        // const existingUser = await User.findOne( {email: email} );
        const existingUser = await knex('users').where({ email: email }).then(user => {
            return user[0];});
        console.log("existingUser: " + existingUser);
        if (!existingUser || existingUser == "") {
            return res
                .status(401)
                .json({
                    errorMessage: "Wrong email or password provided."
                })
        }

        // console.log("provided password: " + password);
        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
        if (!passwordCorrect) {
            console.log("Incorrect password");
            return res
                .status(401)
                .json({
                    errorMessage: "Wrong email or password provided."
                })
        }

        // LOGIN THE USER
        // const token = auth.signToken(existingUser._id);
        const token = auth.signToken(existingUser.id);
        console.log(token);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: true
        }).status(200).json({
            success: true,
            user: {
                first: existingUser.first,
                last: existingUser.last, 
                email: existingUser.email
            }
        }).send();

    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
}

logoutUser = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none"
    }).send();
}

registerUser = async (req, res) => {
    try {
        const { first, last, email, password, passwordVerify } = req.body;
        // console.log(req.body);
        // console.log("create user: " + first + " " + last + " " + email + " " + password + " " + passwordVerify);
        if (!first || !last || !email || !password || !passwordVerify) {
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });
        }
        console.log("all fields provided");
        if (password.length < 6) {
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter a password of at least 8 characters."
                });
        }
        console.log("password long enough");
        if (password !== passwordVerify) {
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter the same password twice."
                })
        }
        console.log("password and password verify match");
        // await knex.schema.hasTable('users');
        // const existingUser = await User.findOne( {email: email} );
        // console.log(req.body);
        const retCheck = await knex('users').where( {email: email} )
            .then((user) => {
                console.log("existingUser: " + user);
                if (user != "")
                {   
                    return {
                        success: false,
                        errorMessage: "An account with this email already exists."
                    };
                }
            })
            .catch(err => console.log('User not found!'));
        if (retCheck && !retCheck.success) {
            return res.status(400).json(retCheck);
        }
        // if (existingUser) {
        //     return res
        //         .status(400)
        //         .json({
        //             success: false,
        //             errorMessage: "An account with this email already exists."
        //         })
        // }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const passwordHash = await bcrypt.hash(password, salt);
        console.log("passwordHash: " + passwordHash);

        // const newUser = new User({
        //     first, last, email, passwordHash
        // });
        // const savedUser = await newUser.save();
            const addedUser = await knex('users')
            .insert(
                {
                    first: first,
                    last: last,
                    email: email,
                    passwordHash: passwordHash
                },
                ['id', 'first', 'last', 'email', 'passwordHash']
            ).then(user => {
                const token = auth.signToken(user.id);
                return {user: user[0], token: token};
            }).catch(err => console.log("Same Email..."));
            // console.log(savedUser);

        // LOGIN THE USER
        // const token = auth.signToken(savedUser._id);
        // const token = auth.signToken(savedUser.id);
        // console.log("token:" + token);
            // console.log(addedUser);
        await res.cookie("token", addedUser.token, {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        }).status(200).json({
            success: true,
            user: {
                id: addedUser.user.id,
                first: addedUser.user.first,
                last: addedUser.user.last,
                email: addedUser.user.email
            }
        });
        console.log("token sent");

    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
}

module.exports = {
    getLoggedIn,
    registerUser,
    loginUser,
    logoutUser
}