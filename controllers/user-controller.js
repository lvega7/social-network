const { User } = require('../models');

const userController = {
    // get all users
    getAllUser(req, res) {
      User.find({})
        // .select('-__v')
        // .sort({ _id: -1 })
        .then(dbUserData  => res.json(dbUserData ))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
    // get users by id
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        .then(dbUserData  => res.json(dbUserData ))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
    // create a new user
    createUser({ body }, res) {
      User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

      // update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  }
}

module.exports = userController;