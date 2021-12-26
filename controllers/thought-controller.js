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
    // get users by id
    getThoughtById({ params }, res) {
      Thought.findOne({ _id: params.id })
        .then(dbThoughtData  => res.json(dbThoughtData ))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
    // // create a new thought
    createThought({ body }, res) {
      Thought.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
          .then(dbThoughtData => {
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No Thought found with this id!' });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => res.json(err));
      },

      deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => res.json(err));
      }
}

module.exports = thoughtController;