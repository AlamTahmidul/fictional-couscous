const knex = require('../utils/knex').instance();

// CREATE
module.exports.createAnimal = (req, res ) => {
    knex('animals')
    .insert(
        {
            type: req.body.type,
            breed: req.body.breed,
            name: req.body.name,
            age: req.body.age,
            sex: req.body.sex,
            description: req.body.description,
            handlerID: req.body.handlerID,
            images: req.body.images
        }, ['type', 'breed', 'name', 'age', 'sex', 'description', 'handlerID', 'images']
    ).then((animal) => res.status(200).json(animal))
    .catch(err => res.status(400).json(err));
}

// RETRIEVE
module.exports.getAnimal = (req, res) => {
    knex('animals')
        .where({ id: req.params.id })
        .then((animal) => res.status(200).json(animal))
        .catch(err => res.status(400).json(err));
}
// UPDATE
module.exports.updateAnimal = (req, res ) => {
    knex('animals')
        .where({ id: req.params.id })
        .update(
            {
                type: req.body.type,
                breed: req.body.breed,
                name: req.body.name,
                age: req.body.age,
                sex: req.body.sex,
                description: req.body.description,
                handlerID: req.body.handlerID,
                images: req.body.images
            }, ['type', 'breed', 'name', 'age', 'sex', 'description', 'handlerID', 'images']
        )
        .then((animal) => res.status(200).json(animal[0]))
        .catch((err) => res.status(500).json(err));
}
// DELETE
module.exports.deleteAnimal = (req, res ) => {
    knex('animals')
    .where({ id: req.params.id })
    .del()
    .then((animal) => res.status(200).json(animal))
    .catch((err) => res.status(500).json(err));
}