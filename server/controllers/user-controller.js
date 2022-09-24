const User = require('../models/user-model');

module.exports.getUser = async (req, res) => {
    console.log("Finding user: " + JSON.stringify(req.params.id));

    await User.findById( {_id: req.params.id}, (err, user) => {
        if (err) {
            return res.status(400).json( {success: false, err: err});
        } else {
            console.log("Found user");
        }
    })
    .then((user) => res.status(200).json({ success: true, user: user}))
    .catch(err => res.status(400).json({ success: false, message: "User not found", err: err}));
}

module.exports.updateUser = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No body'
        })
    }

    User.findOneAndUpdate(
        { _id: body._id },
        {
            $set: {
                "email": body.email,
                "first": body.first,
                "last": body.last,
                "interests": body.interests,
                "location": body.location
            }
        },
        {
            returnDocument: "after"
        }
    ).then(user => res.status(200).json({ success: true, user: user}))
    .catch(err => res.status(400).json({ success: false, message: "User Not Found", err: err }));

}

module.exports.deleteUser = async (req, res) => {
    User.findOneAndRemove( {_id: req.body._id}, (err, user) => {
        if (err) {
            res.status(400).json({ success: false, err: err });
        } else {
            res.status(200).json({success: true, user: user});
        }
    });
}