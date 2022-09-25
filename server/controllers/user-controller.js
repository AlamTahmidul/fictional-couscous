const knex = require('../utils/knex').instance();

// Retrieve
module.exports.getUser = (req, res) => {
    knex('users')
        .where({ id: req.params.id })
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json(err));
};

// Update
module.exports.updateUser = (req, res) => {
    knex('users')
        .where({ id: req.params.id })
        .update(
            {
                first: req.body.first,
                last: req.body.last,
                email: req.body.email,
                interests: req.body.interests
            }, ['first', 'last', 'email', 'interests']
        )
        .then((user) => res.status(200).json(user[0]))
        .catch((err) => res.status(500).json(err));
}

// DELETE
module.exports.deleteUser = (req, res) => {
    knex('users')
      .where({ id: req.params.id })
      .del(['id', 'first','last', 'email'])
      .then((user) => {
        // console.log(user);
        res.status(200).json(user);
        })
      .catch((err) => res.status(500).json(err));
  };