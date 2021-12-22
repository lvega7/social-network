const { User } = require('../models');

const userController = {
    // get all pizzas
    getAllUser(req, res) {
      User.find({})
        // .select('-__v')
        // .sort({ _id: -1 })
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    }
}

module.exports = userController;