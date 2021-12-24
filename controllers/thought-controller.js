const { Thought } = require('../models');

const thoughtController = {
    // get all users
    getAllThought(req, res) {
      Thought.find({})
        // .select('-__v')
        // .sort({ _id: -1 })
        .then(dbUserData  => res.json(dbUserData ))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
    // // get users by id
    // getUserById({ params }, res) {
    //   User.findOne({ _id: params.id })
    //     .then(dbUserData  => res.json(dbUserData ))
    //     .catch(err => {
    //       console.log(err);
    //       res.sendStatus(400);
    //     });
    // },
    // // create a new user
    // createUser({ body }, res) {
    //   User.create(body)
    //     .then(dbUserData => res.json(dbUserData))
    //     .catch(err => res.json(err));
    // },
}

module.exports = thoughtController;