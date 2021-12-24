const router = require('express').Router();
const {
  getAllThought
  
} = require('../../controllers/thought-controller');

// /api/users
router
  .route('/')
  .get(getAllThought)
//   .post(createPizza);

// // /api/pizzas/:id
// router
//   .route('/:id')
//   .get(getPizzaById)
//   .put(updatePizza)
//   .delete(deletePizza);

module.exports = router;