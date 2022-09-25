const auth = require('../auth');
const AnimalController = require('../controllers/animal-controller');

module.exports = (app) => {
    app.post('/animal', auth.verify, AnimalController.createAnimal);
    app.get('/animal/:id', auth.verify, AnimalController.getAnimal);
    app.put('/animal/:id', auth.verify, AnimalController.updateAnimal);
    app.delete('/animal/:id', auth.verify, AnimalController.deleteAnimal);
}