const Animal = require('../models/animal-model');

module.exports.createAnimal = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({success: false, message:"Improperly Formatted Request"});
    } else if (!body.type || !body.name || !body.description)
    {
        return res.status(400).json({success: false, message:"Missing Required Fields"});
    }
    const newAnimal = new Animal(body);
    await newAnimal.save().then(() => {return res.status(200).json({ success: true, animal: newAnimal})});
};

module.exports.getAnimal = async (req, res) => {
    console.log("Finding Animal: " + JSON.stringify(req.params.id));

    await Animal.findById(req.params.id)
    .then((animal) => {return res.status(200).json({ success: true, animal: animal})})
    .catch(err => res.status(400).json({ success: false, message: "Animal not found", err: err}));
}

module.exports.updateAnimal = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No body'
        })
    }

    Animal.findOneAndUpdate(
        { _id: req.params.id },
        {
            "type": body.type,
            "breed": body.breed,
            "name": body.name,
            "age": body.age,
            "sex": body.sex,
            "description": body.description,
            "vaccines": body.vaccines,
            "images": body.images   
        },
        {
            returnDocument: "after"
        }
    ).then((animal) => res.status(200).json({ success: true, animal: animal}))
    .catch(err => res.status(400).json({ success: false, message: "Animal Not Found", err: err }));

}

module.exports.deleteAnimal = async (req, res) => {
    Animal.findOneAndRemove( {_id: req.params.id}, (err, animal) => {
        if (err) {
            res.status(400).json({ success: false, err: err });
        } else {
            res.status(200).json({success: true, animal: animal});
        }
    });
}